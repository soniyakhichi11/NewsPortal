import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createComment } from '../controllers/comment.controller.js'

const router = express.Router()

router.post("/create",verifyToken,createComment)
router.get("/getPostComments/:postId",getPost)

export default router

