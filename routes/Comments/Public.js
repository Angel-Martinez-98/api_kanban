import { Router } from "express";
import { PublicController } from "../../controllers/Comments/Public.js";

export const CommentsPublicRouter = Router();

CommentsPublicRouter.get("/", PublicController.getAll);
CommentsPublicRouter.get("/:id", PublicController.getComment);
CommentsPublicRouter.post("/", PublicController.createComment);
CommentsPublicRouter.put("/:id", PublicController.updateComment);
CommentsPublicRouter.delete("/:id", PublicController.deleteComment);
