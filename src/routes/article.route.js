import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticleId,
  updateArticle,
} from "../controllers/article.controller.js";

export const articleRoutes = Router();

articleRoutes.post("/articles", createArticle);
articleRoutes.get("/articles", getAllArticles);
articleRoutes.get("/articles/:id", getArticleId);
articleRoutes.put("/articles/:id", updateArticle);
articleRoutes.delete("/articles/:id", deleteArticle);
