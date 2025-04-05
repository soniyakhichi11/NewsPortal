import mongoose from "mongoose"

const commentSchema = new mongoose.Schema(
    {
        content: { type: String, required: true },
        postId:{type: String, required: true},
        userId:{type: String, required: true},
        likes:{types:Array, default}
    }
)