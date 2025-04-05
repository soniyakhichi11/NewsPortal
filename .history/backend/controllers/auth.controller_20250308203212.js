import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js';

export const signup = async(req,res,next)=>{

    const {username,email,password}=req.body;
    console.log(req.body);

    if(!username|| !email || !password||
        username===""|| email===""|| password===""
    ){
        return    next(errorHandler(400,"All fields are required"));//error middleware is created for handling this types of error
    }

    const hashedPassword =bcryptjs.hashSync(password,10)
    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    });

    try{
       await newUser.save() 
       res.json("Signup successfull")
    } catch(error){
        next(error)
    }

}

export const signin = async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password || email==="" ||password===""){
        return next(errorHandler(400,""))
    }
}