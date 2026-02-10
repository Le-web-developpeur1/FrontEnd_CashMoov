import axios from 'axios';

// Configuration de base pour les appels API
const API_URL = import.meta.env.VITE_API_URL || '/api';

// Créer une instance axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter automatiquement le token à toutes les requêtes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['X-CSRFToken'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || 
                    error.response?.data?.detail || 
                    error.message || 
                    'Une erreur est survenue';
    return Promise.reject(new Error(message));
  }
);

// ============================================
// AUTHENTIFICATION
// ============================================

export const authAPI = {

  login: async (email: string, password: string) => {
    try {
      const { data } = await api.post('/auth/token/', { email, password });
      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Email ou mot de passe incorrect');
    }
  },

  getUserInfo: async () => {
  try {
    const { data } = await api.get('/profile/users/me/');
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || error.message || 'Erreur récupération infos utilisateur');
  }
},


};

// ============================================
// CONTACT FORM Feedback
// ============================================

export const feedbackAPI = {

  //Envoie du message
  send: async (data: {
    last_name: string;
    first_name: string;
    email: string;
    phone_number?: string;
    message?: string;
  }) => {
    try {
      const response = await api.post('/feedback/', data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de l\'envoi du message');
    }
  },

  // Récupérer tous les messages de contact
  getAll: async () => {
    try {
      const { data } = await api.get('/feedback/');
      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de la récupération des messages');
    }
  },

  // Récupérer un message spécifique par slug
  getById: async (slug: string) => {
    try {
      const { data } = await api.get(`/feedback/${slug}/`);
      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de la récupération du message');
    }
  },

  // Supprimer un message
  delete: async (slug: string) => {
    try {
      const { data } = await api.delete(`/feedback/${slug}/`);
      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de la suppression');
    }
  },
};

// ============================================
// CHATBOT
// ============================================

export const chatbotAPI = {

  sendMessage: async (data: {
    question: string, 
    conversationId?: string
  }) => {
    try {
      const response = await api.post('/chatbot/chatbots/ask/', data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de l\'envoi du message');
    }
  },
};


// // ============================================
// // CONVERSATIONS (Admin & Assistants)
// // ============================================

// export const conversationsAPI = {

//   getAll: async (filters?: {
//     status?: 'waiting' | 'active' | 'resolved';
//   }) => {
//     try {
//       const params = new URLSearchParams();
//       if (filters?.status) params.append('status', filters.status);
      
//       const { data } = await api.get(`/conversations/?${params.toString()}`);
//       return data;
//     } catch (error: any) {
//       throw new Error(error.message || 'Erreur lors de la récupération des conversations');
//     }
//   },

//   getById: async (id: string) => {
//     try {
//       const { data } = await api.get(`/conversations/${id}/`);
//       return data;
//     } catch (error: any) {
//       throw new Error(error.message || 'Erreur lors de la récupération de la conversation');
//     }
//   },

//   resolve: async (conversationId: string) => {
//     try {
//       const { data } = await api.post(`/conversations/${conversationId}/resolve/`);
//       return data;
//     } catch (error: any) {
//       throw new Error(error.message || 'Erreur lors de la résolution');
//     }
//   },
// };


// ============================================
// PROFILE (User Settings)
// ============================================

export const profileAPI = {

  // Mettre à jour le profil (partiel)
  updateProfile: async (data: {
    first_name?: string;
    last_name?: string;
    address?: string;
  }) => {
    try {
      const response = await api.patch('/profile/users/me/', data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de la mise à jour du profil');
    }
  },

  // Changer l'email
  changeEmail: async (newEmail: string, currentPassword: string) => {
    try {
      const response = await api.post('/profile/users/set_email/', {
        new_email: newEmail,
        current_password: currentPassword,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors du changement d\'email');
    }
  },

  // Demander réinitialisation du mot de passe
  requestPasswordReset: async (email: string) => {
    try {
      const response = await api.post('/profile/users/reset_password/', { email });
      return response.data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de la demande de réinitialisation');
    }
  },

  // Confirmer réinitialisation du mot de passe
  confirmPasswordReset: async (uid: string, token: string, newPassword: string) => {
    try {
      const response = await api.post('/profile/users/reset_password_confirm/', {
        uid,
        token,
        new_password: newPassword,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de la réinitialisation');
    }
  },

  // Changer le mot de passe (utilisateur connecté)
  changePassword: async (currentPassword: string, newPassword: string) => {
    try {
      const response = await api.post('/profile/users/set_password/', {
        current_password: currentPassword,
        new_password: newPassword,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors du changement de mot de passe');
    }
  },
};

// ============================================
// USERS (Admin)
// ============================================

export const usersAPI = {

  // Récupérer tous les utilisateurs
  getAll: async () => {
    try {
      // Demander une grande limite pour avoir tous les utilisateurs
      const { data } = await api.get('/profile/users/?limit=1000');
      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de la récupération des utilisateurs');
    }
  },

  // Créer un nouvel utilisateur
  create: async (userData: {
    first_name: string;
    last_name: string;
    email: string;
    user_type: string;
    address?: string;
  }) => {
    try {
      const { data } = await api.post('/profile/users/', userData);
      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de la création de l\'utilisateur');
    }
  },

  // Mettre à jour un utilisateur
  update: async (slug: string, userData: {
    first_name?: string;
    last_name?: string;
    email?: string;
    user_type?: string;
    address?: string;
  }) => {
    try {
      const { data } = await api.patch(`/profile/users/${slug}/`, userData);
      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de la mise à jour');
    }
  },

  // Supprimer un utilisateur
  delete: async (slug: string, currentPassord: string) => {
    try {
      const { data } = await api.delete(`/profile/users/${slug}/`, {
        data: {current_password: currentPassord }
      });
      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de la suppression');
    }
  },
};
