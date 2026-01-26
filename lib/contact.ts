// lib/api/contact.ts

export interface ContactFormData {
  firstName: string;    // Required: min=2, max=50
  lastName?: string;    // Optional: max=50
  phoneNumber?: string; // Optional: min=8, max=20
  email: string;        // Required: email format, max=100
  message: string;      // Required: min=10, max=2000
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

// URLs de fallback pour différents environnements
const getApiBaseUrl = (): string => {
  // 1. Variable d'environnement (primaire)
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  // 2. URLs selon l'environnement (fallback)
  if (process.env.NODE_ENV === 'production') {
    // URL de production par défaut - À MODIFIER AVEC TON URL
    return 'https://portfolio-springboot-production-39de.up.railway.app';
  }
  
  // 3. Développement local (Spring Boot peut être en local)
  // Si ton Spring Boot tourne aussi en local:
  return 'http://localhost:8080';
};
export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
  
  console.log('Envoi vers:', `${API_BASE_URL}/api/auth/contact-us`);
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/contact-us`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Statut réponse:', response.status);
    
    if (response.status === 201) {
      const result = await response.json();
      console.log('Réponse réussie:', result);
      
      // Si le backend ne retourne pas le champ "success", on le déduit du statut
      // On suppose que toute réponse 201 est un succès
      return {
        success: true,
        message: 'Message envoyé avec succès',
        ...result// Optionnel
      };
    } else if (!response.ok) {
      const errorText = await response.text();
      console.error('Backend error response:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      
      let errorMessage = `Erreur HTTP ${response.status}`;
      try {
        const errorData = JSON.parse(errorText);
        errorMessage = errorData.message || errorMessage;
      } catch {
        errorMessage = errorText || errorMessage;
      }
      
      throw new Error(errorMessage);
    } else {
      // Pour les autres statuts de succès (200, etc.)
      const result = await response.json();
      return {
        success: true,
        ...result  // On étend avec ce que le backend nous envoie
      };
    }
  } catch (error) {
    console.error('Erreur API contact:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erreur réseau ou serveur'
    };
  }
}