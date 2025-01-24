import { PublicModel } from "../../models/Categories/Public.js";
import {
  validateCategorySchema,
  validatePartialCategorySchema,
} from "../../schemas/Categories.js";
export class PublicController {
  static async getAll(req, res) {
    try {
      const categories = await PublicModel.getAll();
      if (!categories) {
        return res.status(404).json({ message: "Categories not found" });
      }
      return res.status(200).json(categories);
    } catch (error) {
      console.log("PublicController:getAll");
    }
  }
  static async getCategory(req, res) {
    const { id } = req.params;
    try {
      const category = await PublicModel.getCategory({ id });
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      return res.status(200).json(category);
    } catch (error) {
      console.log("PublicController:getCategory");
    }
  }
  static async createCategory(req, res) {
    const validCategory = validateCategorySchema(req.body);
    try {
      if (validCategory.error) {
        return res.status(400).json(JSON.parse(validCategory.error.message));
      }
      const category = await PublicModel.createCategory(validCategory.data);
      return res.status(201).json(category);
    } catch (error) {
      console.log("PublicController:createCategory");
    }
  }
  static async updateCategory(req, res) {
    const { id } = req.params;
    const validCategory = validatePartialCategorySchema(req.body);
    try {
      if (validCategory.error) {
        return res.status(400).json(JSON.parse(validCategory.error.message));
      }
      const category = await PublicModel.updateCategory({
        id,
        data: validCategory.data,
      });
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      return res.status(200).json(category);
    } catch (error) {
      console.log("PublicController:updateCategory");
    }
  }
  static async deleteCategory(req, res) {
    const { id } = req.params;
    try {
      const category = await PublicModel.deleteCategory({
        id,
      });
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      return res.status(200).json(category);
    } catch (error) {
      console.log("PublicController:deleteCategory");
    }
  }
}
