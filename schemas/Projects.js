import zod from "zod";

const ProjectSchema = zod.object({
    name: zod.string({
        required_error: "El nombre del del proyecto es requerido"
    })
    .min(10, {
        message: "Debe contener un minimo de 10 caracteres"
    })
})

export function validateProjectSchema (data) {
    return ProjectSchema.safeParse(data);
}

export function validatePartialProjectSchema (data) {
    return ProjectSchema.partial().safeParse(data);
}