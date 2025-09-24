import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
import { login } from "../controllers/auth.controller.js";

export const authRoute = Router();

authRoute.post("/auth/register", createUser);
authRoute.post("/auth/login", login);
