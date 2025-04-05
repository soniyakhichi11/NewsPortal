import { errorHandler } from "../utils/error.js"

export const updateUser = async(req,res,next)=>{
        if(req.user.id !== req.params.userId){
                return next(errorHandler(403,"You can update your own actcount!"))    
        }
}