import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: null,
  },
  favourites: {
    type: Array,
    default: [],
  },
  notification: {
    type: Array,
    default: [],
  },
  role: {
    type: String,
    default: "user",
  },
});

export const UserModel = mongoose.model("User", UserSchema);
