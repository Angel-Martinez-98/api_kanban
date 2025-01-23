import { PublicModel } from "../../models/Categories/Public.js";
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
}
