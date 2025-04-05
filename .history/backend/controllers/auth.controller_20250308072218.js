import 

export const signup = async(req,res)=>{

    const{username,email,password}=req.body;
    if(!username|| !email || !password||
        username===""|| email===""|| password===""
    ){
            return res.status(400).json({message:"Please fill in all fields"});
    }

    const hashedPassword =bcryptjs.hashsync(password)

}