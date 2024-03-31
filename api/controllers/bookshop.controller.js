import bookShop from "../models/bookShop.model.js";

import { errorHandle } from "../utils/error.js";

export const Bookcreate = async (req, res, next) => {
  const { name, image, type, size, page, Des } = req.body;

  const newbook = new bookShop({
    name,
    image,
    type,
    size,
    page,
    Des,
  });
  try {
    const savedbook = await newbook.save();
    res.status(201).json(savedbook);
  } catch (error) {
    next(error);
  }
};

export const getBook = async (req, res, next) => {
  try {
    const getbook = await bookShop.find();

    if (getbook.length > 0) {
      res.json({
        message: "From details retrieved successfully",
        getbook,
      });
    } else {
      return next(errorHandle(404, " data not fonud "));
    }
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    await bookShop.findByIdAndDelete(req.params.boookId);
    res.status(200).json("The post has been deleted");
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const updatebook = await bookShop.findByIdAndUpdate(
      req.params.bookId,
      {
        $set: {
          name: req.body.name,
          image: req.body.image,
          type: req.body.type,
          size: req.body.size,
          page: req.body.page,
          Des: req.body.Des,
        },
      },
      { new: true }
    );
    res.status(200).json(updatebook);
  } catch (error) {
    next(error);
  }
};
