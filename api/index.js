import express from 'express';
import mongoose from "mongoose";

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
const app = express();
app.listen(3000,()=>{
    console.log('server is runnig on port 3000');

}
);