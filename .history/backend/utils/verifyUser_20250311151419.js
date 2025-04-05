import {errorHandler} from "./error.js"
import 
export const verifyToken =(req,res,next)=>{
    const token= req.cookies.access_token

    if(!token){
        return next(errorHandler(401,"Unauthorized"))
    }
    JsonWebTokenError.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return next(errorHandler(401,"Unauthorized"))
        }
        req.user = user
        next()
    })
} 