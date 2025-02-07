import { PublicModel } from "../../models/Comments/Public.js";
import {
  validateCommentSchema,
  validatePartialCommentSchema,
} from "../../schemas/Comments.js";
export class PublicController {
  static async getAll(req, res) {
    try {
      const comments = await PublicModel.getAll();
      if (!comments) {
        return res.status(404).json({ message: "Comments not found" });
      }
      return res.status(200).json(comments);
    } catch (error) {
      console.log("PublicController:getAll");
    }
  }
  static async getComment(req, res) {
    const { id } = req.params;
    try {
      const comment = await PublicModel.getComment({ id });
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      return res.status(200).json(comment);
    } catch (error) {
      console.log("PublicController:getComment");
    }
  }
  static async createComment(req, res) {
    const validComment = validateCommentSchema(req.body);
    try {
      if (validComment.error) {
        return res.status(400).json(JSON.parse(validComment.error.message));
      }
      const comment = await PublicModel.createComment(validComment.data);
      return res.status(201).json(comment);
    } catch (error) {
      console.log("PublicController:createComment");
    }
  }
  static async updateComment(req, res) {
    const { id } = req.params;
    const validPartialComment = validatePartialCommentSchema(req.body);
    try {
      if (validPartialComment.error) {
        return res
          .status(400)
          .json(JSON.parse(validPartialComment.error.message));
      }
      const comment = await PublicModel.updateComment({
        id,
        data: validPartialComment.data,
      });
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      return res.status(200).json(comment);
    } catch (error) {
      console.log("PublicController:updateComment");
    }
  }
  static async deleteComment(req, res) {
    const { id } = req.params;
    try {
      const comment = await PublicModel.deleteComment({
        id,
      });
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      return res.status(200).json(comment);
    } catch (error) {
      console.log("PublicController:deleteComment");
    }
  }
}
