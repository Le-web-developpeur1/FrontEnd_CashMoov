// Configuration de base pour les appels API
const API_URL = import.meta.env.VITE_API_URL || '/api';

// Fonction helper pour les appels API
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token');
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Erreur réseau' }));
    throw new Error(error.message || 'Une erreur est survenue');
  }

  return response.json();
}

// ============================================
// AUTHENTIFICATION
// ============================================

export const authAPI = {

  login: async (email: string, password: string) => {
    return fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password}),
    });
  },

  verifyToken: async () => {
    return fetchAPI('/auth/verify');
  },

  logout: async () => {
    return fetchAPI('/auth/logout', { method: 'POST' });
  },
};

// ============================================
// TÉMOIGNAGES
// ============================================

export const testimonialsAPI = {

  getAll: async () => {
    return fetchAPI('/testimonials');
  },

  getById: async (id: string) => {
    return fetchAPI(`/testimonials/${id}`);
  },

  create: async (data: {
    name: string;
    role: string;
    content: string;
    rating: number;
  }) => {
    return fetchAPI('/testimonials', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  update: async (id: string, data: {
    name: string;
    role: string;
    content: string;
    rating: number;
  }) => {
    return fetchAPI(`/testimonials/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete: async (id: string) => {
    return fetchAPI(`/testimonials/${id}`, {
      method: 'DELETE',
    });
  },
};

// ============================================
// PARTENAIRES
// ============================================

export const partnersAPI = {

  getAll: async () => {
    return fetchAPI('/partners');
  },

  create: async (data: {
    name: string;
    logo: string;
    description?: string;
  }) => {
    return fetchAPI('/partners', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  update: async (id: string, data: {
    name: string;
    logo: string;
    description?: string;
  }) => {
    return fetchAPI(`/partners/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete: async (id: string) => {
    return fetchAPI(`/partners/${id}`, {
      method: 'DELETE',
    });
  },
};

// ============================================
// CONVERSATIONS
// ============================================

export const conversationsAPI = {

  getAll: async (filters?: {
    status?: 'waiting' | 'active' | 'resolved';
    assistantId?: string;
  }) => {
    const params = new URLSearchParams(filters as any);
    return fetchAPI(`/conversations?${params}`);
  },

  getById: async (id: string) => {
    return fetchAPI(`/conversations/${id}`);
  },

  getMessages: async (conversationId: string) => {
    return fetchAPI(`/conversations/${conversationId}/messages`);
  },

  sendMessage: async (conversationId: string, message: string) => {
    return fetchAPI(`/conversations/${conversationId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
  },

  resolve: async (conversationId: string) => {
    return fetchAPI(`/conversations/${conversationId}/resolve`, {
      method: 'POST',
    });
  },

  assign: async (conversationId: string, assistantId: string) => {
    return fetchAPI(`/conversations/${conversationId}/assign`, {
      method: 'POST',
      body: JSON.stringify({ assistantId }),
    });
  },
};

// ============================================
// CONTACT FORM
// ============================================

export const contactAPI = {

  send: async (data: {
    last_name: string;
    first_name: string;
    email: string;
    phone_number?: string;
    message?: string;
  }) => {
    return fetchAPI('/feedback/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
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
    return fetchAPI('/chatbot/chatbots/ask/', {
      method: "POST",
      body: JSON.stringify(data)
    });
  },
};

// ============================================
// UPLOAD
// ============================================

export const uploadAPI = {
  // Upload une image
  uploadImage: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'upload');
    }

    return response.json();
  },
};

export default {
  auth: authAPI,
  testimonials: testimonialsAPI,
  partners: partnersAPI,
  conversations: conversationsAPI,
  contact: contactAPI,
  chatbot: chatbotAPI,
  upload: uploadAPI,
};
