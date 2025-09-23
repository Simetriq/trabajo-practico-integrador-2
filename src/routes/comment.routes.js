import { Router } from "express";
import { createComment } from "../controllers/comment.controller.js";

export const commentRoutes = Router();

commentRoutes.post("/comments", createComment);
