import express from 'express';
const router = express.Router();
import {
  addOrdersItems
} from '../controllers/order.js';
import { protect } from '../middelware/authMiddleware.js';

router.route('/').post(protect, addOrdersItems);

export default router;
