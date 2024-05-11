import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowerCase:true,
        index:true
    },
    password:{
        type:String,
        required:true,
    }
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    

    this.password = await bcrypt.hash(this.password ,10)

    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password , this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id:this._id
    },"secret",{expiresIn:"1d"})
}


userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id:this._id
    },"secret",{expiresIn:"10d"})
}


const User = mongoose.model("User", userSchema)

export {
    User
}