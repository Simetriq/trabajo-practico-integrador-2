import { Router } from "express";
import {
  createTag,
  deleteTag,
  getAllTags,
  getTagById,
  updateTag,
} from "../controllers/tag.controller.js";

export const routesTag = Router();

routesTag.post("/tags", createTag);
routesTag.get("/tags", getAllTags);
routesTag.get("/tags/:id", getTagById);
routesTag.put("/tags/:id", updateTag);
routesTag.delete("/tags/:id", deleteTag);
