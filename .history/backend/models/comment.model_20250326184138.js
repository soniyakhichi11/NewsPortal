import mongoose from "mongoose"

const commentSchema = new mongoose.Schema(
    {
        content: { type: String, required: true },
        postId
    }
)