import { useAuth } from '@/contexts/AuthContext';
import { MessageSquare, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AssistantDashboard() {
  const { user } = useAuth();

  const stats = [
    {
      icon: MessageSquare,
      label: 'Conversations assignées',
      value: '5',
      color: 'bg-blue-500',
    },
    {
      icon: Clock,
      label: 'Temps de réponse moyen',
      value: '2m 30s',
      color: 'bg-orange-500',
    },
    {
      icon: CheckCircle,
      label: 'Résolues aujourd\'hui',
      value: '12',
      color: 'bg-green-500',
    },
    {
      icon: TrendingUp,
      label: 'Taux de satisfaction',
      value: '96%',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Bonjour, {user?.name} 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Vous avez 5 conversations en attente
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Conversations en attente
          </h2>
          <Link
            to="/assistant/conversations"
            className="text-[#2A4793] hover:text-[#1f356d] font-medium text-sm"
          >
            Voir tout →
          </Link>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold">
                U{i}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">Utilisateur {i}</h3>
                  <span className="text-xs text-gray-500">Il y a {i * 5}min</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Comment puis-je effectuer un transfert vers la France ?
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Urgent
                  </span>
                  <span className="text-xs text-gray-500">
                    3 messages
                  </span>
                </div>
              </div>
              <Link
                to={`/assistant/chat/${i}`}
                className="bg-[#2A4793] text-white px-4 py-2 rounded-lg hover:bg-[#1f356d] transition text-sm font-medium"
              >
                Répondre
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-xl shadow-md p-6 text-white">
        <h2 className="text-xl font-bold mb-3">Conseil du jour</h2>
        <p className="opacity-90">
          Répondez rapidement aux questions fréquentes en utilisant les réponses prédéfinies. 
          Cela améliore votre temps de réponse et la satisfaction client !
        </p>
      </div>
    </div>
  );
}
