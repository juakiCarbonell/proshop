import express from "express";
const router = express.Router();
import { authUser, getUserProfile, registerUser } from "../controllers/user.js";
import {protect} from '../middelware/authMiddleware.js';


router.route('/').post(registerUser)
router.post('/login', authUser)
// To implement middelware, we put it as a first argument
router.route('/profile').get(protect, getUserProfile)


export default router;
