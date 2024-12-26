import Product from '../models/product.model.js';
// Middleware to calculate totalPrice before saving the cart
const calculateTotalPrice = async (req, res, next) => {
  try {
    if (req.body && Array.isArray(req.body.items)) {
      let totalPrice = 0;

      // Loop through the items in the request body to calculate total price
      for (const item of req.body.items) {
        const product = await Product.findById(item.productId);
        if (product) {
          totalPrice += item.quantity * product.price;
        }
      }

      // Add totalPrice to the request body before proceeding
      req.body.totalPrice = totalPrice;
    }
    next();
  } catch (error) {
    console.error('Error calculating total price:', error);
    res.status(500).json({ error: 'Server error while calculating total price' });
  }
};

export default calculateTotalPrice;
