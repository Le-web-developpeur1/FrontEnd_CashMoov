import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authAPI } from '@/utils/api';

interface User {
  slug: string;
  first_name: string;
  last_name: string;
  email: string;
  address: string | null;
  user_type: 'admin' | 'assistant';
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

  useEffect(() => {
    const token = localStorage.getItem('access');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('access');
        localStorage.removeItem('user');
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const data = await authAPI.login(email, password);
            
      if (data.access) {
        localStorage.setItem('access', data.access);
      }
      
      if (data.refresh) {
        localStorage.setItem('refresh', data.refresh);
      }
      
      const storedToken = localStorage.getItem('access');
      
      if (!storedToken) {
        throw new Error('Erreur lors du stockage du token');
      }
      
      // Petit délai pour s'assurer que tout est bien synchronisé
      await new Promise(resolve => setTimeout(resolve, 100));
      
      try {
        const userInfo = await authAPI.getUserInfo();
        
        // Stockage des infos utilisateur
        localStorage.setItem('user', JSON.stringify(userInfo));
        setUser(userInfo);
      } catch (userError: any) {
        throw userError;
      }
      
    } catch (error: any) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('access');
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


 // const testAccounts = [
      //   {
      //     email: 'admin@cashmoov.com',
      //     password: 'admin123',
      //     user: {
      //       id: '1',
      //       name: 'Admin Cash Moov',
      //       email: 'admin@cashmoov.com',
      //       user_type: 'admin' as const,
      //     },
      //     token: 'test-admin-token-123',
      //   },
      //   {
      //     email: 'assistant@cashmoov.com',
      //     password: 'assistant123',
      //     user: {
      //       id: '2',
      //       name: 'Assistant Cash Moov',
      //       email: 'assistant@cashmoov.com',
      //       user_type: 'assistant' as const,
      //     },
      //     token: 'test-assistant-token-456',
      //   },
      // ];

      // const testAccount = testAccounts.find(
      //   acc => acc.email === email && acc.password === password
      // );

      // if (testAccount) {
      //   localStorage.setItem('token', testAccount.token);
      //   localStorage.setItem('user', JSON.stringify(testAccount.user));
      //   setUser(testAccount.user);
      //   return;
      // }
