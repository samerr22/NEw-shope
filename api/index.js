import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import UserRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import beauty from './routes/Beauty.route.js';
import book from './routes/bookshop.route.js';
import cloth from './routes/cloth.route.js';
import elect from './routes/Electric.route.js';
import frniture from './routes/frniture.route.js';

import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('is commd');
})
.catch((err) => {
    console.log(err);
})
const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})



app.use('/api/user', UserRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/beauty', beauty);
app.use('/api/book', book);
app.use('/api/cloth', cloth);
app.use('/api/elect', elect);
app.use('/api/frniture', frniture);



app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
 