import zod from "zod";

const CommentSchema = zod.object({
  user_id: zod.string(),
  task_id: zod.number().int(),
  comment: zod.string(),
  add_date: zod.string().date(),
});

export function validateCommentSchema(data) {
  return CommentSchema.safeParse(data);
}

export function validatePartialCommentSchema(data) {
  return CommentSchema.partial().safeParse(data);
}
