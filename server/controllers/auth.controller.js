import bcrypt from "bcrypt"
import { genToken } from "../config/token.js"
import User from "../models/user.models.js"

export const signUp = async (req ,res)=>{
    const {name ,email , password} =req.body

    const existEmail = await User.findOne({email})
    if(existEmail){
        return res.status(400).json("User Already Exist")
    }

    if(password.length >6){
        return res.status(400).json("Password greater then 6 daal baby")
    }

    const hashPassword = await bcrypt.hash(password ,8)


    const user = await User.create({
        name ,email ,password:hashPassword
    })

    const token =await genToken(user._id)

res.cookie("token", token, {
  httpOnly: true,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  sameSite: "Strict",
  secure: false
});


    res.status(404).json(user)

}



export const Login = async (req ,res)=>{
    const {email , password} =req.body

    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json("User Not Exist")
    }

    if(password.length >6){
        return res.status(400).json("User Already Exist")
    }


   const isMatchPassword = await bcrypt.compare(password, user.password);


    if(!isMatchPassword){
        return res.status(400).json("Incorrect password")
    }

    const token =await genToken(user._id)

    res.cookie("token",token ,{httpOnly:true ,maxAge:7*24*60*60*1000 , sameSite:"Strict" ,secure:false})

    res.status(404).json(user)

}

export const logout =async(req,res)=>{
    res.clearCookie("token")
     res.status(404).json({message:"Logout"})

}