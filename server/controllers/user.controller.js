import bcrypt from "bcrypt"
import { genToken } from "../config/token"

const signUp = async (req ,res)=>{
    const {name ,email , password} =req.body

    const existEmail = await User.find({email})
    if(existEmail){
        return res.status(400).json("User Already Exist")
    }

    if(password.length >6){
        return res.status(400).json("User Already Exist")
    }

    const hashPassword = await bcrypt.hash(password ,8)


    const user = await User.create({
        name ,email ,password:hashPassword
    })

    const token =await genToken(user._id)

    res.cookie("token",token ,{httpOnly:true ,maxAge:7*24*60*60*1000 , sameSite:"Strict" ,secure:false})

    res.status(404).json(user)

}