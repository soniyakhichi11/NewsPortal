export const createComment = async(req,res,next)=>{
    try {
        const {content,postId,userId} = req.body

        if(userId!== req.user.id){
            
        }

        
    } catch (error) {
        
    }

}