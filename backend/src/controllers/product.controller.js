import Product from "../models/product.model.js";

export const addProduct = async (req, res) => {
    const { title, description, price, quantity, category, image } = req.body;
  
    try {
      // Validate input
      if (!title || !description || !price || !quantity || !category || !image) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Create a new product document
      const newProduct = new Product({
        title,
        description,
        price,
        quantity,
        category,
        image,
      });
  
      // Save the product to the database
      await newProduct.save();
  
      // Respond with the newly created product
      res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };