import Electrical from "../models/Electrical.model.js";
import bookShop from "../models/bookShop.model.js";

import { errorHandle } from "../utils/error.js";

export const Ecreate = async (req, res, next) => {
  const { name, image, quantity, type, Des } = req.body;

  const newElectric = new Electrical({
    name,
    image,
    quantity,
    type,

    Des,
  });
  try {
    const savedElectric = await newElectric.save();
    res.status(201).json(savedElectric);
  } catch (error) {
    next(error);
  }
};

export const getElect = async (req, res, next) => {
  try {
    const getElectric = await Electrical.find();

    if (getElectric.length > 0) {
      res.json({
        message: "From details retrieved successfully",
        getElectric,
      });
    } else {
      return next(errorHandle(404, " data not fonud "));
    }
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};

export const deleteElect = async (req, res, next) => {
  try {
    await Electrical.findByIdAndDelete(req.params.electtId);
    res.status(200).json("The post has been deleted");
  } catch (error) {
    next(error);
  }
};

export const updateElect = async (req, res, next) => {
  try {
    const updateElectric = await Electrical.findByIdAndUpdate(
      req.params.electId,
      {
        $set: {
          name: req.body.name,
          image: req.body.image,
          quantity: req.body.quantity,
          type: req.body.type,
          size: req.body.size,

          Des: req.body.Des,
        },
      },
      { new: true }
    );
    res.status(200).json(updateElectric);
  } catch (error) {
    next(error);
  }
};
