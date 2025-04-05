import express from "express"
import { verifyToken } from "../utils/verifyUser"
import { createPost, getPosts, getPost, updatePost, deletePost } from "../controllers

const router = express.Router()

router.post("/create",verifyToken,create)

export default router