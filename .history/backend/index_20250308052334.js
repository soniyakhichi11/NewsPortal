import express from"express";
import mongoose from "mongoose";
const app = express();


mongoose.connect("mongodb+srv://soniyakhichi11:soniyakhichi11@cluster0.ebwwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})