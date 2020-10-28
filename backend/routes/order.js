import express from 'express';
const router = express.Router();
import {
  addOrdersItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered
} from '../controllers/order.js';
import { protect, admin } from '../middelware/authMiddleware.js';

router.route('/').post(protect, addOrdersItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
