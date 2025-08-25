import { ZodType } from 'zod';

export async function validatedFormData<T>(formData: FormData, schema: ZodType<T>) {
    const data = Object.fromEntries(formData.entries());
    const validatedFields = schema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.issues,
            message: 'Dados inválidos. Por favor, corrija os campos.'
        };
    }

    return { data: validatedFields.data };
}