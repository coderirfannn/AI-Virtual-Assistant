import express from "express";

export const userRoute =express.Router()

userRoute.post("/signup" ,signUp)
userRoute.post("/signin" ,Login)
userRoute.post("/logout" ,logout)
