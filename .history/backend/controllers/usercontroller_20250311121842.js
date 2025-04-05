import { errorHandler } from "../utils/error.js"

export const updateUser = async(req,res,next)=>{
        if(req.user.id !== req.params.userId){
                return next(errorHandler(403,"You can update your own actcount!"))    
        }
        if(req.body.password){
            if(req.body.password.length<8){
                return next(errorHandler(400,"Password must be atleast 8 characters"))
            }
            req.body.password = bcryptjs.hashSync(req.body.password,10)
        }

        if(req.body.username){
            if(req.body.password.length < 5 || req.body.password.length < 5){
                return next(errorHandler(400,"Password must be atleast 8 characters"))
            }
            req.body.password = bcryptjs.hashSync(req.body.password,10)
        }
        
}