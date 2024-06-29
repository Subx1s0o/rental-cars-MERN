import mongoose from "mongoose";

const carsSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  mark: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
  fuel: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Array,
    default: [],
  },
  rating: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const CarsModel = mongoose.model("Cars", carsSchema);
