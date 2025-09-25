import { Router } from "express";
import {
  createComment,
  getAllComments,
  updateComment,
  deleteComment,
  getCommentId,
} from "../controllers/comment.controller.js";
import {
  createCommentValidation,
  updateCommentValidation,
} from "../middlewares/validations/comment.validation.js";

export const commentRoutes = Router();

commentRoutes.post("/comments", createCommentValidation, createComment);
commentRoutes.get("/comments", getAllComments);
commentRoutes.get("/comments/:id", getCommentId);
commentRoutes.put("/comments/:id", updateCommentValidation, updateComment);
commentRoutes.delete("/comments/:id", deleteComment);
