import express from 'express';
import {addCartItem,getCartItems} from '../controllers/cart.controller.js';
const router = express.Router();

router.post('/add-to-cart', addCartItem);
router.get('/get-cart-items/:userId', getCartItems);

export default router;