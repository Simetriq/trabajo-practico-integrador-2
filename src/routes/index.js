import { Router } from "express";
import { userRouter } from "./user.route.js";
import { articleRoutes } from "./article.route.js";

export const routes = Router();

routes.use(userRouter);
routes.use(articleRoutes);
