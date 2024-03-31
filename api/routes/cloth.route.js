import  express  from "express";
import { verifyToken } from '../utils/VerfiyUser.js';
import { clothcreate, deletecloth, getcloth, updatecloth } from "../controllers/cloth.controller.js";
import {  verifyinvntary } from '../utils/verifyInventManger.js';

const router = express.Router();

router.post('/Ccreate',verifyToken, verifyinvntary , clothcreate);
router.get('/CgetAll', getcloth);
router.put('/cloth/:clothId',verifyToken, verifyinvntary ,  updatecloth);
router.delete('/deleteC/:cloothId',verifyToken, verifyinvntary ,deletecloth);


export default router;