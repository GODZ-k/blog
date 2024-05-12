import jwt from "jsonwebtoken"
const verifyJWT = (req,res,next) =>{
    const token  = req.cookies.accessToken

    console.log(token)

    if(!token){
        return res.status(400).json({
            msg:"Invalid token"
        })
    }

    const user = jwt.verify(token,"secret")

    req.user = user

    next()
}


export default verifyJWT