import { PrivateModel } from "../../models/Projects/Private.js";
import {
    validateProjectSchema,
    validatePartialProjectSchema
} from "../../schemas/Projects.js";

export class PrivateController {
    static async createProject (req, res) {
        try {
            const project = await PrivateModel.createProject({ name: '' });
            return res.status(201).json(project);
        } catch (error) {
            console.log('PrivateController:createProject');
        }
    }

    static async updateProject (req, res) {
        try {
            const { id } = req.params;
            const validProject = validatePartialProjectSchema(req.body);

            if (validProject.error) {
                return res.status(400).json(JSON.parse(validProject.error.message));
            }

            const project = await PrivateModel.updateProject({
                id,
                data: validProject.data
            });

            if (!project) {
                return res.status(404).json({ message: "Project not found" });
            }

            return res.status(200).json(project);
        } catch (error) {
            console.log('PrivateController:updateProject');
        }
    }

    static async deleteProject (req, res) {
        try {
            const { id } = req.params;
            const project = await PrivateController.deleteProject({
                id
            });

            if (!project) {
                return res.status(404).json({ message: "Project not found: " + id });
            }

            return res.status(200).json(project);
        } catch (error) {
            console.log('PrivateController:deleteProject:' + error);
        }
    }
}