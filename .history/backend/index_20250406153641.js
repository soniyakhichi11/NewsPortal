import express from"express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT ||3000;
app.use(express.json());
app.use(cookieParser())
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err)); 


app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes)
app.use("/api/post",postRoutes)
app.use("/api/comment",commentRoutes)
app.get('/', (req, res) => {
    res.send('News Portal Backend is Running');
  });

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode|| 500
    const message = err.message || "Internal Server Error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})


  