import express from "express"
import { verifyToken } from "../utils/verifyUser.js"
import { create, getPosts } from "../controllers/post.controller.js"

const router = express.Router()

router.post("/create",verifyToken,create)
router.get("/getposts",getPosts)
router.delete("/deletepost/:postId/:userId",verifyToken,)
export default router