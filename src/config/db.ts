import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined!");
    }
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error: any) {
    console.error(`MongoDB Connection Failed: ${error?.message}`);
    process.exit(1);
  }
};

export default connectDB;