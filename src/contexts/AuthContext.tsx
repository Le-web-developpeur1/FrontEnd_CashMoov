import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authAPI } from '@/utils/api';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'assistant';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Vérifier si l'utilisateur est déjà connecté au chargement
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const testAccounts = [
        {
          email: 'admin@cashmoov.com',
          password: 'admin123',
          user: {
            id: '1',
            name: 'Admin Cash Moov',
            email: 'admin@cashmoov.com',
            role: 'admin' as const,
          },
          token: 'test-admin-token-123',
        },
        {
          email: 'assistant@cashmoov.com',
          password: 'assistant123',
          user: {
            id: '2',
            name: 'Assistant Cash Moov',
            email: 'assistant@cashmoov.com',
            role: 'assistant' as const,
          },
          token: 'test-assistant-token-456',
        },
      ];

      const testAccount = testAccounts.find(
        acc => acc.email === email && acc.password === password
      );

      if (testAccount) {
        localStorage.setItem('token', testAccount.token);
        localStorage.setItem('user', JSON.stringify(testAccount.user));
        setUser(testAccount.user);
        return;
      }

      // Sinon, appel à l'API réelle
      const data = await authAPI.login(email, password);
      
      // Stocker le token et les infos utilisateur
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user);
      
    } catch (error) {
      console.error('Erreur de connexion:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isAuthenticated: !!user,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
};
