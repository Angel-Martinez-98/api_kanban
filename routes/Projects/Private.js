import { Router } from "express";
import { PrivateController } from "../../controllers/Projects/Private.js";

export const ProjectsPrivateRouter = Router();

ProjectsPrivateRouter.post('/', PrivateController.createProject);
ProjectsPrivateRouter.put('/:id', PrivateController.updateProject);
ProjectsPrivateRouter.delete('/:id', PrivateController.deleteProject);