import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Categories = require("../../web/json/Categories.json");
export class PublicModel {
  static async getAll() {
    const categories = Categories;
    if (!categories) {
      return null;
    }
    return categories;
  }
  static async getCategory({ id }) {
    const category = Categories.find((category) => category.id == id);
    if (!category) {
      return null;
    }
    return category;
  }
  static async createCategory({ name }) {
    Categories.push({ id: Categories.length + 1, name });
    return { message: "Category created" };
  }

  static async updateCategory({ id, data }) {
    const categoryIndex = Categories.findIndex((category) => category.id == id);
    if (categoryIndex === -1) {
      return null;
    }
    const updateCategory = {
      ...Categories[categoryIndex],
      ...data,
    };
    Categories[categoryIndex] = updateCategory;

    return { message: "Category updated" };
  }
  static async deleteCategory({ id }) {
    const categoryIndex = Categories.findIndex((category) => category.id == id);
    if (categoryIndex === -1) {
      return null;
    }
    Categories.splice(categoryIndex, 1);
    return { message: "Category deleted" };
  }
}
