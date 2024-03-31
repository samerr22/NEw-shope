import express from 'express';
import {  signout, test,} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/VerfiyUser.js';

const router = express.Router();


router.get('/test', test); 

router.post('/signout', signout);


export default router;