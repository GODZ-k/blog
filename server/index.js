import mongoose from "mongoose";
import express, { urlencoded } from "express"
import cors from "cors"
import { User } from "./models/user.model.js";
import cookieParser from "cookie-parser";
import verifyJWT from "./middleware/auth.middleware.js";

const app =  express()
app.use(express.json())
app.use(urlencoded({extended:false}))

mongoose.connect("mongodb+srv://admin:Et3F5AOkirDBDDya@cluster0.wd2qchi.mongodb.net/blog")
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))
app.use(cookieParser())


async function generateAccessAndRefreshToken(userId){
    try {
        const user = await User.findById(userId)

        const AccessToken = user.generateAccessToken(user._id)
        const refreshToken = user.generateRefreshToken(user._id)

        return {AccessToken, refreshToken}

    } catch (error) {
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}


app.post("/register" ,async (req,res)=>{

    const {email,password} = req.body

try {
    if(!(email || password)){
        return res.status(400).json({
            msg:"All field must be required"
        })
    }

    const exitedUser = await User.findOne({email})

    if(exitedUser){
        return res.status(400).json({
            msg:"User already exists"
        })
    }

    const user = await User.create({email, password})

    if(!user){
        return res.status(500).json({
            msg:"Internal server error"
        })
    }

   return res.status(200).json({
        msg:"User registerd successfully",
    })
} catch (error) {
    console.log(error)
    return res.status(500).json({
        msg:"Internal server error",
        
    })
}
})


app.post("/login" , async(req,res)=>{
    const {email,password} = req.body
    try {
        if(!(email || password)){
            return res.status(400).json({
                msg:"All fields must be required"
            })
        }

        const user =  await User.findOne({email})

        if(!user){
            return res.status(400).json({
                msg:"User not found"
            })
        }

        const checkPassword = await user.isPasswordCorrect(password)

        if(!checkPassword){
            return res.status(404).json({
                msg:"Invalid password"
            })
        }

        const {AccessToken , refreshToken } = await generateAccessAndRefreshToken(user._id)

        console.log(AccessToken, refreshToken)

        const options = {
            httpOnly:true,
            path:"/"
        }

        return res.status(200)
        .cookie("accessToken" , AccessToken , options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            email:user.email,
            msg:"User loggedin successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
})


app.get("/profile" , verifyJWT , async(req,res)=>{
    try {
        const {_id} = req.user
        console.log(_id)

        const user = await User.findById(_id)

        return res.status(200).json({
            email:user.email
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
})


app.get("/logout" ,verifyJWT ,async (req,res)=>{
    try {
        const {_id} = req.user

        const user = await User.findById(_id)

        if(!user){
            return res.status(400).json({
                msg:"Unauthorized access"
            })
        }

        const options = {
            httpOnly:true,
            path:"/"
        }

        return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken",options)
        .json({
            msg:"user loggedout successfully"
        })
    } catch (error) {
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
})


app.listen(3000,()=>{
    console.log("listning on port on 3000")
})