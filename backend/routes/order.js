import express from 'express';
const router = express.Router();
import {
  addOrdersItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders
} from '../controllers/order.js';
import { protect } from '../middelware/authMiddleware.js';

router.route('/').post(protect, addOrdersItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').get(protect, updateOrderToPaid);

export default router;
