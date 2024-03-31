import express from "express";
import { verifyToken } from "../utils/VerfiyUser.js";
import { verifyinvntary } from "../utils/verifyInventManger.js";
import {
  Beautycreate,
  deleteBeauty,
  getBeuty,
  updateBeauty,
} from "../controllers/Beauty.controller.js";

const router = express.Router();

router.post("/Bcreate", verifyToken, verifyinvntary, Beautycreate);
router.get("/BgetAll", getBeuty);
router.put("/Beauty/:BeatyId", verifyToken, verifyinvntary, updateBeauty);
router.delete(
  "/deletebeauty/:BeautyId",
  verifyToken,
  verifyinvntary,
  deleteBeauty
);

export default router;
