import  Cart  from '../models/cart.model.js';
import Product from '../models/product.model.js';
export const addCartItem = async (req, res) => {
    const {userId, productId, quantity } = req.body;
    try {

  
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Check if the cart already exists for the user
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        // If no cart exists, create a new one
        cart = new Cart({
          userId,
          items: [{
            productId,
            quantity,
            price: product.price,
          }],
        });
      } else {
        // If the cart exists, check if the item is already in the cart
        const existingItem = cart.items.find(item => item.productId.toString() === productId);
        if (existingItem) {
          // If item exists, update the quantity
          existingItem.quantity += quantity;
        } else {
          // If item doesn't exist in the cart, add a new item
          cart.items.push({ productId, quantity, price: product.price });
        }
      }
  
      // Save the updated cart
      await cart.save();
  
      res.status(200).json({ message: 'Item added to cart successfully', cart });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }

