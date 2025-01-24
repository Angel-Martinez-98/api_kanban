import { Router } from "express";
import { PublicController } from "../../controllers/Categories/Public.js";

export const PublicRouter = Router();

PublicRouter.get("/", PublicController.getAll);
PublicRouter.get("/:id", PublicController.getCategory);
PublicRouter.post("/", PublicController.createCategory);
PublicRouter.put("/:id", PublicController.updateCategory);
PublicRouter.delete("/:id", PublicController.deleteCategory);
