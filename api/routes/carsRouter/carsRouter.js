import { Router } from "express";
import { CarsModel } from "../../DB/models/carsModel.js";
import { UserModel } from "../../DB/models/userModel.js";
import authentificated from "../../middlewares/authentificated.js";

const carsRouter = Router();

carsRouter.get("/", async (_, res) => {
  try {
    const cars = await carsModel.find();
    return res.json(cars);
  } catch (error) {
    return res.status(400).json({ error: "Cars not found" });
  }
});

carsRouter.post("/", authentificated, async (req, res) => {
  try {
    const { title, model, year, mark, photo, transmission, seats, fuel, type } =
      req.body;
    await CarsModel.create({
      user_id: req.user._id,

      title,
      type,
      mark,
      model,
      year,
      photo,
      transmission,
      seats,
      fuel,
    });

    return res.status(200).json({ message: "Car added" });
  } catch (error) {
    console.log(error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired" });
    }
    return res.status(400).json({ error: "Can't add car" });
  }
});

carsRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const car = await CarsModel.findOne({ _id: id });
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    const {
      _id,
      title,
      type,
      mark,
      model,
      year,
      photo,
      transmission,
      seats,
      fuel,
      reviews,
      rating,
      discount,
    } = car;

    return res.status(200).json({
      id: _id,
      title,
      type,
      mark,
      model,
      year,
      photo,
      transmission,
      seats,
      fuel,
      reviews,
      rating,
      discount,
    });
  } catch (error) {
    console.error("Error fetching car:", error);
    return res.status(400).json({ error: "Couldn't find car" });
  }
});

carsRouter.post("/:id/reviews", authentificated, async (req, res) => {
  try {
    const { comment, rating } = req.body;
    const carId = req.params.id;

    const userId = req.user._id;
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const car = await CarsModel.findById(carId);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    car.reviews.push({
      content: { comment, rating },
      user: {
        avatar: user.avatar,
        username: user.username,
      },
    });

    await car.save();

    return res.status(200).json({ message: "succesfully added" });
  } catch (error) {
    console.error("Error adding review:", error);
    return res.status(400).json({ error: "Can't add review" });
  }
});

export default carsRouter;
