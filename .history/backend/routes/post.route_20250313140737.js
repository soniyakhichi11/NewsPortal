import express from "express"
import { verifyToken } from "../utils/verifyUser.js"
import { create } from "../controllers/post.controller.js"

const router = express.Router()

router.post("/create",verifyToken,create)
router.get("/getPosts",get)
export default router