import  express  from "express";
import { verifyToken } from '../utils/VerfiyUser.js';
import { Ecreate, deleteElect, getElect, updateElect } from "../controllers/elctric.controller.js";
import {  verifyinvntary } from '../utils/verifyInventManger.js';

const router = express.Router();

router.post('/Ecreate',verifyToken, verifyinvntary , Ecreate);
router.get('/FgetAll', getElect);
router.put('/elect/:electId',verifyToken, verifyinvntary ,updateElect);
router.delete('/delect/:electtId',verifyToken, verifyinvntary , deleteElect );


export default router;