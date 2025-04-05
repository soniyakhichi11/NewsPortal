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
            default:"https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        content:{
            type:String,
            required:true
        },
        slug:{
            type:String,
            required:true,
            unique:true
        }
    }
)