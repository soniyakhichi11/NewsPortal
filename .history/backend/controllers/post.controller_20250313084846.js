import Post from "../models/post.model.js"
import { errorHandler } from "../utils/error.js"

export const create = async(req,res,next)=>{
    if(!req.user.isAdmin){
     return next(errorHandler(403,"You are not authorized to create a post"))
    }

    if(!req.body.title || !req.body.content){
        return next(errorHandler(400,"Please provide both title and content"))
    }

    const slug = req.body.title.split(" ").join("-").toLowerCase().replace(/[^a-zA-Z0-9-]/g,"" )

    const newPost = new Post({
        ...req.body,
        slug,userId:req.user.id,
    })
}