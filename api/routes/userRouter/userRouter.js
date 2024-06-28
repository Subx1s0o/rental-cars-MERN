import { Router } from "express";
import passport from "passport";
import { UserModel } from "../../DB/models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const userRouter = Router();

userRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      avatar: req.user.avatar,
      favourites: req.user.favourites,
      notification: req.user.notification,
      role: req.user.role,
    });
  }
);

userRouter.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      username: username.trim(),
      email: email.trim(),
      password: hashedPassword,
    });

    const accessToken = jwt.sign({ id: newUser._id }, process.env.JWT_KEY, {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign(
      { id: newUser._id },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ error: "invalid data" });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const accessToken = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_KEY,
      {
        expiresIn: "15m",
      }
    );

    const refreshToken = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
userRouter.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;

  try {
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const decoded = jwt.decode(refreshToken);
    const userId = decoded.id;

    const accessToken = jwt.sign({ id: userId }, process.env.JWT_KEY, {
      expiresIn: "15m",
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(401).json({ error: "Invalid refresh token" });
  }
});

export default userRouter;
