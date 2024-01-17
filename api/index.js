import express from 'express';
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import { config } from 'dotenv';
config();
const app = express();
app.use(express.json());


// Connection URL
const mongoURI = 'mongodb://localhost:27017/RealState';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
app.listen(3000,()=>{
    console.log('server is runnig on port 3000');

}
);

app.use("/api/user",userRouter);

app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode||500;
    const message = err.message ||"enternal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});