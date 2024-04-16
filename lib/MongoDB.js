import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
const options = {};
let mongoClient;

if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export const connectMongoDB = async () => {
  if (mongoClient) {
    return { mongoClient };
  }
  // try {
  //   mongoClient = await new MongoClient(uri, options).connect();
  //   console.log("Successfully connected to DB.");
  //   return { mongoClient };
  // } catch (error) {
  //   console.log("Failed to connect to DB.");

  try {
    mongoClient = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to DB.");
    return { mongoClient };
  } catch (error) {
    console.log("Failed to connect to DB.");
    console.error(error);
  }
};
