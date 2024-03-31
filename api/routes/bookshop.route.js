import  express  from "express";
import { verifyToken } from '../utils/VerfiyUser.js';
import { Bookcreate, deleteBook, getBook, updateBook } from "../controllers/bookshop.controller.js";
import {  verifyinvntary } from '../utils/verifyInventManger.js';

const router = express.Router();

router.post('/Bcreate',verifyToken, verifyinvntary , Bookcreate);
router.get('/bgetAll', getBook);
router.put('/book/:bookId',verifyToken, verifyinvntary , updateBook);
router.delete('/deleteb/:boookId',verifyToken, verifyinvntary , deleteBook);


export default router;