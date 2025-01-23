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
}
