import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
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
app.listen(3000 , ()=> {
      console.log('server is running on port 3000');
});

app.use("/api/user" , userRouter);
