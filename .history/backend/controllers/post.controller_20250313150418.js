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
        slug,
        userId:req.user.id,
    })
    try{
        const savedPost = await newPost.save()

        res.status(201).json(savedPost)
    } catch(error){
        next(error)
    }
}

export const getPosts = async(req,res,next)=>{
    try {
        const startIndex = parseInt(req.query.startIndex) || 0
        const limit = parseInt(req.query.limit) || 9
        const sortDirection = req.query.order === "asc"?1:-1
        const posts = await Post.find({
            ...(req.query.userId && {userId:req.query.userId}),
            ...(req.query.category && {category:req.query.category}),
            ...(req.query.slug && {slug:req.query.slug}),
            ...(req.query.postId && {_id:req.query.postId}),
            ...Post()

        })
    } catch (error) {
        next(error)
    }
}