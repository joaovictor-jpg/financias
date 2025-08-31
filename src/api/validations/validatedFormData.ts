import { ZodType } from 'zod';

export async function validatedFormData<T>(formData: FormData, schema: ZodType<T>) {
    const data = Object.fromEntries(formData.entries());
    const validatedFields = schema.safeParse(data);

    if (!validatedFields.success) {
        const issues = validatedFields.error.issues;
        const errors: FieldErrors = {};

        issues.forEach(i => {
            const fieldName = i.path[0] as string;
            if (!errors[fieldName]) {
                errors[fieldName] = [];
            }
            errors[fieldName].push(i.message);
        });
        return {
            errors: errors,
            message: 'Dados inválidos. Por favor, corrija os campos.'
        };
    }

    return { data: validatedFields.data };
}