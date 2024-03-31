import Beauty from "../models/Beauty.model.js";
import frniture from "../models/Frniture.model.js";

import { errorHandle } from "../utils/error.js";

export const Fcreate = async (req, res, next) => {
  const { name, image, type, Des } = req.body;

  const newfrn = new frniture({
    name,
    image,
    type,
    Des,
  });
  try {
    const savedfrn = await newfrn.save();
    res.status(201).json(savedfrn);
  } catch (error) {
    next(error);
  }
};

export const getFrn = async (req, res, next) => {
  try {
    const getfrn = await frniture.find();

    if (getfrn.length > 0) {
      res.json({
        message: "From details retrieved successfully",
        getfrn,
      });
    } else {
      return next(errorHandle(404, " data not fonud "));
    }
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};

export const deleteFrn = async (req, res, next) => {
  try {
    await frniture.findByIdAndDelete(req.params.frnId);
    res.status(200).json("The post has been deleted");
  } catch (error) {
    next(error);
  }
};

export const updateFrn = async (req, res, next) => {
  try {
    const updateBeauty = await frniture.findByIdAndUpdate(
      req.params.frndId,
      {
        $set: {
          name: req.body.name,
          image: req.body.image,
          type: req.body.type,
          Des: req.body.Des,
        },
      },
      { new: true }
    );
    res.status(200).json(updateBeauty);
  } catch (error) {
    next(error);
  }
};
