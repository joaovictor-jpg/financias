type FormError = {
    message: string | null;
    errors?: FieldErrors
}

type FieldErrors = {
    [key: string]: string[]
};