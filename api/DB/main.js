import mongoose from "mongoose";
import { config } from "dotenv";

config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;

const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/?retryWrites=true&w=majority&appName=edu`;
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(dbConnectionString);
    console.log("DB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("ERROR CONNECTING TO DATABASE", error);
  }
};

export default connectDB;
