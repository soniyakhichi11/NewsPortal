import { errorHandler } from "../utils/error.js"

export const create = async(req,res,next)=>{
    if(!req.user.isAdmin){
     return next(errorHandler(403,"You are not authorized to create a post"))
    }

    if(!req.body.title || !req.body.content){
        
    }
}