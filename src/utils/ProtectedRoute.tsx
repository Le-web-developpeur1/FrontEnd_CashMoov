import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  allowedRoles: ('admin' | 'assistant')[];
}

export default function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth();

  // Afficher un loader pendant la vérification
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2A4793]"></div>
      </div>
    );
  }

  // Pas connecté, redirection vers login
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Connecté mais pas le bon rôle, redirection vers accueil
  if (user && !allowedRoles.includes(user.user_type)) {
    return <Navigate to="/" replace />;
  }

  // Tout est bon affiche la page
  return <Outlet />;
}
