import mongoose from "mongoose";
import express from "express";
import { userRoute } from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173/",
    credentials:true
}))

app.use("/api/v1",userRoute)





mongoose.connect("mongodb+srv://roshnibarodiya1:t65b7NhyOsvqew1q@cluster0.7ecfwzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Baby Db is connected ho gya ");
    
}).catch((e)=>{
    console.log("baby data base faild ho gya" ,e);
    
})



app.listen(8080 , (req,res)=>{
    console.log("Server is connected");
    
})