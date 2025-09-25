import { Router } from "express";
import {
  createTag,
  deleteTag,
  getAllTags,
  getTagById,
  updateTag,
} from "../controllers/tag.controller.js";
import {
  createTagValidation,
  updateTagValidation,
  tagIdValidation,
} from "../middlewares/validations/tag.validator.js";

export const routesTag = Router();

routesTag.post("/tags", createTagValidation, createTag);
routesTag.get("/tags", getAllTags);
routesTag.get("/tags/:id", tagIdValidation, getTagById);
routesTag.put("/tags/:id", updateTagValidation, updateTag);
routesTag.delete("/tags/:id", tagIdValidation, deleteTag);
