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
            if(req.body.username.length < 5 || req.body.username.length < 20){
                return next(errorHandler(400," username must be between 5 and 20 characters"))
            }
           if(req.body.username.includes(" ")){
            return next(errorHandler(400,"username cannot contain spaces"))
           }
           if(req.body.username!== req.body.username.toLowerCase()){
               req.body.username = req.body.username.toLowerCase()
           }
           if(!req.body.username.match(/^{a-zA-Z0-9]+$/)){
            return next(errorHandler(400,"username can only contain letters and numbers")) 
           }
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId,{
                $set:{
                    username:req.body.username,
                    email:req.body.email,
                    profilePicture:req.body.profilePicture,
                    password:req.body.password,
                },
            },{new:true})
        } catch (error) {
            next(error)
        }
        
}