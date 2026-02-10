import { useAuth } from '@/contexts/AuthContext';
import { MessageSquare, Clock, CheckCircle, Star, AlertCircle } from 'lucide-react';

export default function AssistantDashboard() {
  const { user } = useAuth();

  const stats = {
    activeConversations: 0,
    resolvedToday: 0,
    averageResponseTime: '0min',
    satisfactionRate: 0,
  };

  const myConversations: any[] = [];
  const newRequests: any[] = [];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Bonjour, {user?.first_name} {user?.last_name}
        </h1>
        <p className="text-gray-600 mt-2">
          Voici votre activité du jour
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {stats.activeConversations}
          </h3>
          <p className="text-gray-600 text-sm">Conversations actives</p>
          <p className="text-xs text-blue-600 mt-3">
            En cours de traitement
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {stats.resolvedToday}
          </h3>
          <p className="text-gray-600 text-sm">Résolues aujourd'hui</p>
          <p className="text-xs text-green-600 mt-3">
            Excellent travail !
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {stats.averageResponseTime}
          </h3>
          <p className="text-gray-600 text-sm">Temps de réponse moyen</p>
          <p className="text-xs text-gray-500 mt-3">
            Dernières 24h
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {stats.satisfactionRate}%
          </h3>
          <p className="text-gray-600 text-sm">Satisfaction clients</p>
          <p className="text-xs text-gray-500 mt-3">
            Basé sur vos conversations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Mes conversations
            </h2>
            <span className="text-sm text-gray-500">
              {myConversations.length} conversation(s)
            </span>
          </div>

          {myConversations.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">Aucune conversation en cours</p>
              <p className="text-xs text-gray-400 mt-1">
                Les nouvelles demandes apparaîtront ici
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {myConversations.map((conv: any) => (
                <div key={conv.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {conv.userName?.charAt(0) || 'U'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{conv.userName}</h3>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {conv.lastActivity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-1">{conv.lastMessage}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          conv.status === 'waiting' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {conv.status === 'waiting' ? 'En attente' : 'Active'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Nouvelles demandes
            </h2>
            <span className="text-sm text-gray-500">
              {newRequests.length} demande(s)
            </span>
          </div>

          {newRequests.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">Aucune nouvelle demande</p>
              <p className="text-xs text-gray-400 mt-1">
                Les demandes non assignées apparaîtront ici
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {newRequests.map((request: any) => (
                <div key={request.id} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {request.userName?.charAt(0) || 'U'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{request.userName}</h3>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {request.waitingTime}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{request.message}</p>
                      <button className="w-full bg-[#2A4793] text-white px-4 py-2 rounded-lg hover:bg-[#1f356d] transition text-sm font-medium">
                        Prendre en charge
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
