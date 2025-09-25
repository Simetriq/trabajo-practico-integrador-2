import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticleId,
  updateArticle,
} from "../controllers/article.controller.js";
import {
  createArticleValidation,
  updateArticleValidation,
  articleIdValidation,
} from "../middlewares/validations/article.validation.js";

export const articleRoutes = Router();

articleRoutes.post("/articles", createArticleValidation, createArticle);
articleRoutes.get("/articles", getAllArticles);
articleRoutes.get("/articles/:id", articleIdValidation, getArticleId);
articleRoutes.put("/articles/:id", updateArticleValidation, updateArticle);
articleRoutes.delete("/articles/:id", articleIdValidation, deleteArticle);
