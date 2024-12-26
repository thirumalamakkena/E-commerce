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


export const getProducts = async (req, res) => {
    try {
      // Fetch all products from the database
      const products = await Product.find();
  
      // Respond with the products
      res.status(200).json({ products });
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };

export const getProductById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Fetch the product by id
      const product = await Product.findById(id);
  
      // Check if the product exists
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Respond with the product
      res.status(200).json({ product });
    } catch (error) {
      console.error('Error fetching product by id:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, quantity, category, image } = req.body;
  
    try {
      // Validate input
      if (!title || !description || !price || !quantity || !category || !image) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Fetch the product by id
      const product = await Product.findById(id);
  
      // Check if the product exists
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Update the product
      product.title = title;
      product.description = description;
      product.price = price;
      product.quantity = quantity;
      product.category = category;
      product.image = image;
  
      // Save the updated product
      await product.save();
  
      // Respond with the updated product
      res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };

  export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find and delete the product by id
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  }
