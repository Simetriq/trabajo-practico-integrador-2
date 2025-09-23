import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.post("/users", createUser);
userRouter.get("/users", getAllUsers);
