export async function fetcher(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Erreur lors de la requête API');
    }
    return response.json();
}
