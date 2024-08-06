import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose
//.connect(process.env.MONGO)
.connect("mongodb://127.0.0.1:27017/SocProject")
.then(() => {
    console.log('connected to mongoos');
})
.catch((err) => {
  console.log(err);
});


const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000 , ()=> {
      console.log('server is running on port 3000');
});

app.use("/api/user" , userRouter);
app.use("/api/auth", authRouter);

app.use((err,req , res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'enternal server error';
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  });
});