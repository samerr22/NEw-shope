import  express  from "express";
import { verifyToken } from '../utils/VerfiyUser.js';
import { Fcreate, deleteFrn, getFrn, updateFrn } from "../controllers/frniture.controller.js";
import {  verifyinvntary } from '../utils/verifyInventManger.js';

const router = express.Router();

router.post('/fcreate',verifyToken, verifyinvntary , Fcreate);
router.get('/FgetAll', getFrn);
router.put('/frn/:frndId',verifyToken, verifyinvntary ,updateFrn);
router.delete('/frnn/:frnId',verifyToken, verifyinvntary , deleteFrn );


export default router;