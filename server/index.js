import mongoose from "mongoose";
import express from "express";


const app = express();





mongoose.connect("").then(()=>{
    console.log("Baby Db is connected ho gya ");
    
}).catch((e)=>{
    console.log("baby data base faild ho gya");
    
})



app.listen(8080 , (req,res)=>{
    console.log("Server is connected");
    
})