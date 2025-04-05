export const verifyToken =(req,res,next)=>{
    const token= req.cookies.access_token

    if(!token){
        return next(errorHandler(401,))
    }
} 