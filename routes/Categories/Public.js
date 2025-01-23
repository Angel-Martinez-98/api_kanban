import { Router } from "express";
import { PublicController } from "../../controllers/Categories/Public.js";

export const PublicRouter = Router();

PublicRouter.get("/", PublicController.getAll);
PublicRouter.get("/:id", PublicController.getCategory);
