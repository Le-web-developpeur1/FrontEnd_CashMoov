import { useAuth } from '@/contexts/AuthContext';
import { MessageSquare, Users, Star, Clock, CheckCircle } from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useAuth();

  const stats = {
    totalConversations: 0,
    waitingConversations: 0,
    activeConversations: 0,
    resolvedConversations: 0,
    onlineAssistants: 0,
    totalUsers: 0,
    satisfactionRate: 0,
  };

  const recentConversations: any[] = [];
  const activeAssistants: any[] = [];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Bienvenue, {user?.first_name} {user?.last_name}
        </h1>
        <p className="text-gray-600 mt-2">
          Vue d'ensemble de la plateforme Cash Moov
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
            {stats.totalConversations}
          </h3>
          <p className="text-gray-600 text-sm">Conversations totales</p>
          <div className="mt-3 flex gap-2 text-xs">
            <span className="text-yellow-600">⏳ {stats.waitingConversations} en attente</span>
            <span className="text-blue-600">💬 {stats.activeConversations} actives</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {stats.onlineAssistants}
          </h3>
          <p className="text-gray-600 text-sm">Assistants en ligne</p>
          <p className="text-xs text-gray-500 mt-3">
            {stats.totalUsers} utilisateurs au total
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {stats.resolvedConversations}
          </h3>
          <p className="text-gray-600 text-sm">Conversations résolues</p>
          <p className="text-xs text-green-600 mt-3">
            Aujourd'hui
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
          <p className="text-gray-600 text-sm">Taux de satisfaction</p>
          <p className="text-xs text-gray-500 mt-3">
            Basé sur les retours clients
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Conversations en attente
            </h2>
            <span className="text-sm text-gray-500">
              {recentConversations.length} conversation(s)
            </span>
          </div>

          {recentConversations.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">Aucune conversation en attente</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentConversations.map((conv: any) => (
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
                          {conv.waitingTime}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-1">{conv.lastMessage}</p>
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
              Assistants actifs
            </h2>
            <span className="text-sm text-gray-500">
              {activeAssistants.length} en ligne
            </span>
          </div>

          {activeAssistants.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">Aucun assistant en ligne</p>
            </div>
          ) : (
            <div className="space-y-3">
              {activeAssistants.map((assistant: any) => (
                <div key={assistant.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold">
                      {assistant.name?.charAt(0) || 'A'}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{assistant.name}</h3>
                      <p className="text-sm text-gray-600">
                        {assistant.activeConversations} conversation(s)
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    assistant.status === 'available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {assistant.status === 'available' ? 'Disponible' : 'Occupé'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
