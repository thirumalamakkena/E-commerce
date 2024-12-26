import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// const mongoUri = process.env.MONGO_URI;
const mongoUri = "mongodb+srv://admin:auYyyyVgYCcBVwWc@cluster0.mckklym.mongodb.net/supermarketData?retryWrites=true&w=majority&appName=Cluster0"


if (!mongoUri) {
  console.error("MongoDB URI not defined in environment variables");
  process.exit(1);
}

export const connectDb = async () => {
 
  try {
    await mongoose.connect(mongoUri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error: ", error);
    process.exit(1);
  }
};
