import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const Projects = require('../../web/json/Projects.json');

export class PublicModel {
    static async getAll() {
        const projects = Projects;

        if (!projects) {
            return null;
        }

        return projects;
    }
    
    static async getProject ({ id }) {
        const project = Projects.find((project) => project.id == id)

        if (!project) {
            return null;
        }

        return project;
    }
}