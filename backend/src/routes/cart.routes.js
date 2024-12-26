import express from 'express';
import {addCartItem} from '../controllers/cart.controller.js';

const router = express.Router();

router.post('/add-to-cart', addCartItem);

export default router;