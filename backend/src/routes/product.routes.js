import express from 'express';

import { addProduct,getProductById,getProducts,updateProduct,deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/add-product', addProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.put('/update-product/:id', updateProduct);
router.delete('/delete-product/:id', deleteProduct);


export default router;