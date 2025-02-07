import { Router } from "express";
import { PublicController } from "../../controllers/Projects/Public.js";

export const ProjectsPublicRouter = Router();

ProjectsPublicRouter.get('/', PublicController.getAll);
ProjectsPublicRouter.get('/:id', PublicController.getProject);