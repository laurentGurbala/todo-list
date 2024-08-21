export async function fetchJson (url, options = {})
{
    // Préparation des en-têtes
    const header = {Accept: "application/json", ...options.headers};
    // Envoi de la requête
    const response = await fetch(url, {...options, header});
    
    // Vérification de la réponse
    if (response.ok) {
        return response.json();
    }

    // Gestion erreur 
    throw new Error("Erreur serveur", {cause: response});
}