import mongoose from 'mongoose';

const postScheme = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        
    }
)