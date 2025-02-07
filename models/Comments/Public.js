import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Comments = require("../../web/json/Comments.json");
export class PublicModel {
  static async getAll() {
    const comments = Comments;
    if (!comments) {
      return null;
    }
    return comments;
  }
  static async getComment({ id }) {
    const comment = Comments.find((comment) => comment.id == id);
    if (!comment) {
      return null;
    }
    return comment;
  }
  static async createComment({ user_id, task_id, comment, add_date }) {
    Comments.push({
      id: Comments.length + 1,
      user_id,
      task_id,
      comment,
      add_date,
    });
    return { message: "Comment created" };
  }

  static async updateComment({ id, data }) {
    const commentIndex = Comments.findIndex((comment) => comment.id == id);
    if (commentIndex === -1) {
      return null;
    }
    const updateComment = {
      ...Comments[commentIndex],
      ...data,
    };
    Comments[commentIndex] = updateComment;

    return { message: "Comment updated" };
  }
  static async deleteComment({ id }) {
    const commentIndex = Comments.findIndex((comment) => comment.id == id);
    if (commentIndex === -1) {
      return null;
    }
    Comments.splice(commentIndex, 1);
    return { message: "Comment deleted" };
  }
}
