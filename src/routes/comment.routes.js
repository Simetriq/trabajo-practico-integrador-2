import { Router } from "express";
import {
  createComment,
  getAllComments,
  updateComment,
  deleteComment,
  getCommentId,
} from "../controllers/comment.controller.js";

export const commentRoutes = Router();

commentRoutes.post("/comments", createComment);
commentRoutes.get("/comments", getAllComments);
commentRoutes.get("/comments/:id", getCommentId);
commentRoutes.put("/comments/:id", updateComment);
commentRoutes.delete("/comments/:id", deleteComment);
