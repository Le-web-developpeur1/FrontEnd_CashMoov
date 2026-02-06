import { useAuth } from '@/contexts/AuthContext';
import { MessageSquare, Users, Star, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useAuth();

  const stats = [
    {
      icon: MessageSquare,
      label: 'Conversations actives',
      value: '24',
      color: 'bg-blue-500',
      trend: '+12%',
    },
    {
      icon: Users,
      label: 'Assistants en ligne',
      value: '8',
      color: 'bg-green-500',
      trend: '+2',
    },
    {
      icon: Star,
      label: 'Témoignages',
      value: '156',
      color: 'bg-yellow-500',
      trend: '+5',
    },
    {
      icon: TrendingUp,
      label: 'Taux de satisfaction',
      value: '94%',
      color: 'bg-purple-500',
      trend: '+3%',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Bienvenue, {user?.name} 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Voici un aperçu de votre plateforme Cash Moov
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-600 text-sm font-semibold">
                {stat.trend}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Conversations récentes
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                <div className="w-10 h-10 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold">
                  U{i}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">Utilisateur {i}</h3>
                    <span className="text-xs text-gray-500">Il y a {i}h</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Comment puis-je effectuer un transfert international ?
                  </p>
                  <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    En attente
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Assistants actifs
          </h2>
          <div className="space-y-4">
            {[
              { name: 'Marie Dupont', conversations: 5, status: 'En ligne' },
              { name: 'Jean Martin', conversations: 3, status: 'En ligne' },
              { name: 'Sophie Bernard', conversations: 4, status: 'En ligne' },
              { name: 'Pierre Dubois', conversations: 2, status: 'Occupé' },
            ].map((assistant, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold">
                    {assistant.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{assistant.name}</h3>
                    <p className="text-sm text-gray-600">
                      {assistant.conversations} conversation{assistant.conversations > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  assistant.status === 'En ligne' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {assistant.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
