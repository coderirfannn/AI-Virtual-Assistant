import express from "express";
import { Login, logout, signUp } from "../controllers/auth.controller.js";


export const authRoute = express.Router();
authRoute.post("/signup" ,signUp)
authRoute.post("/signin" ,Login)
authRoute.post("/logout" ,logout)