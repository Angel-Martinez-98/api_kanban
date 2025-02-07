import { createRequire } from "node:module";
import { format } from "@formkit/tempo";

const require = createRequire(import.meta.url);
const Projects = require("../../web/json/Projects.json");

export class PrivateModel {
    static async createProject ({ name }) {
        const current_date = format(new Date(), 'YYYY-MM-DD HH:mm:ss', 'en');
        Projects.push({
            id: Projects.length + 1,
            name: name,
            process: [],
            add_date: current_date,
            initial_date: current_date,
            final_date: current_date
        });

        return {
            message: "Project created"
        }
    }

    static async updateProject ({ id, data }) {
        const projectIndex = Projects.findIndex((project) => project.id == id);

        if (projectIndex === -1) {
            return null;
        }

        const updateProject = {
            ...Projects[projectIndex],
            ...data
        }

        Projects[projectIndex] = updateProject;

        return { message: "Project Updated!" };
    }

    static async deleteCategory ({ id }) {
        const projectIndex = Projects.findIndex((project) => project.id == id);

        if (projectIndex === -1) {
            return id;
        }

        Projects.splice(projectIndex, 1);
        return {
            message: "Project deleted"
        }
    }
}