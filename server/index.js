import mongoose from "mongoose";
import express from "express";


const app = express();





mongoose.connect("mongodb+srv://roshnibarodiya1:t65b7NhyOsvqew1q@cluster0.7ecfwzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Baby Db is connected ho gya ");
    
}).catch((e)=>{
    console.log("baby data base faild ho gya");
    
})



app.listen(8080 , (req,res)=>{
    console.log("Server is connected");
    
})