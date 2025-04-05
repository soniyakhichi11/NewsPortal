import { errorHandler } from "../utils/error"

export const createComment = async(req,res,next)=>{
    try {
        const {content,postId,userId} = req.body

        if(userId!== req.user.id){
            return next(errorHandler(403,"you are not allowed to add comment!"))
        }

        const newComment = new Comment({
            content,
            po
        })
    } catch (error) {
        
    }

}