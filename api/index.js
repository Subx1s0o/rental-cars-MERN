import express from "express";
import cors from "cors";
import { config } from "dotenv";
import userRouter from "./routes/userRouter/userRouter.js";
import connectDB from "./DB/main.js";
import passport from "passport";
import "./passport-settings.js";
import bodyParser from "body-parser";
import carsRouter from "./routes/carsRouter/carsRouter.js";
config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use("/api/user", userRouter);
app.use("/api/cars", carsRouter);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
