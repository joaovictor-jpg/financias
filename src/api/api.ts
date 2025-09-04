export async function post(endpoint: string, data: Record<string, string>) {
    const result = await fetch(`${process.env.BACKEND_API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return result;
}