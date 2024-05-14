import mongoose, { model, Schema } from "mongoose";


const blogSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})


export const Blog = model("Blog",blogSchema)