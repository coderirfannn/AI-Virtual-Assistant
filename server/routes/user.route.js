import express from "express";
import { Login, logout, signUp } from "../controllers/user.controller.js";

export const userRoute =express.Router()

userRoute.post("/signup" ,signUp)
userRoute.post("/signin" ,Login)
userRoute.post("/logout" ,logout)
