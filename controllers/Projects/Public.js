import { PublicModel } from "../../models/Projects/Public.js";

export class PublicController {
    static async getAll (req, res) {
        try {
            const projects = await PublicModel.getAll();

            if (!projects) {
                return res.status(404).json({
                    message: "Projects not found"
                });
            }

            return res.status(200).json(projects);
        } catch (error) {
            console.log('PublicController:getAll');
        }
    }

    static async getProject (req, res) {
        try {
            const { id } = req.params;
            const project = await PublicModel.getProject({ id });

            if (!project) {
                return res.status(404).json({ message: "Project not found" });
            }

            return res.status(200).json(project);
        } catch (error) {
            console.log('PublicController:getProject');
            
        }
    }
}