import express from"express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes
dotenv.config();
const app = express();


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err)); 

app.use("/api/auth",authRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})