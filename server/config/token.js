import { json } from "express"
import jwt from "jsonwebtoken"
export const genToken = async(userId) =>{

    try {
        const token=  await jwt.sign({userId} ,"uefvrhjwhrgyh" ,{expiresIn:"10d"})
        return token
    } catch (error) {
        console.log(error);
        
    }
}