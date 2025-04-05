import mongoose from 'mongoose';

const postScheme = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true,
            unique:true
        },
        category:{
            type:String,
            default:"uncategorized"
        },
        image:{
            type:String,
            
        }
    }
)