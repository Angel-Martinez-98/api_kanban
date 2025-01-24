import zod from "zod";

const CategorySchema = zod.object({
  name: zod
    .string({
      required_error: "El nombre de la categoria es requerido",
    })
    .min(3, {
      message: "Minimo tres caracteres",
    }),
});

export function validateCategorySchema(data) {
  return CategorySchema.safeParse(data);
}

export function validatePartialCategorySchema(data) {
  return CategorySchema.partial().safeParse(data);
}
