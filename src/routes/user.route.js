import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserId,
  updateUser,
} from "../controllers/user.controller.js";
import { createUserValidation } from "../middlewares/validations/user.validation.js";

export const userRouter = Router();

userRouter.post("/users", createUserValidation, createUser);
userRouter.get("/users", getAllUsers);
userRouter.get("/users/:id", getUserId);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);
