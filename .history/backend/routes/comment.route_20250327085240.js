import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createComment, getPostComments } from '../controllers/comment.controller.js'

const router = express.Router()

router.post("/create",verifyToken,createComment)
router.get("/getPostComments/:postId",getPostComments)
router.put("/likecomment/:comment")

export default router

