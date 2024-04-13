import { Mongoose } from "mongoose";

export const connectMongoDB = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to DB.");
  } catch (error) {
    console.log("Failed to connect to DB.");
  }
};
