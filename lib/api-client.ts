const API_BASE = "/api/proxy";

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}?path=${path}`);

  if (!res.ok) {
    throw new Error("Erreur API");
  }

  return res.json();
}

/*
Phase 2 :
- Auth token
- Interceptors
- Gestion erreurs globale
*/
