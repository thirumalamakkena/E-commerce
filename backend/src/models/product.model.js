import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: [
        'Baby Care',
        'Eggs, Meat & Fish',
        'Beverages',
        'Electronics',
        'Fruits & Vegetables',
        'Snacks & Branded Foods',
        'Bakery, Cakes & Dairy',
      ], // The allowed categories
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;