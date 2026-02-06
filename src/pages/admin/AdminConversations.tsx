import { useState } from 'react';
import { MessageSquare, Clock, Search, User, Star } from 'lucide-react';

interface Conversation {
  id: string;
  userName: string;
  assistantName: string;
  lastMessage: string;
  timestamp: string;
  status: 'waiting' | 'active' | 'resolved';
  rating?: number;
  duration: string;
}

export default function AdminConversations() {
  const [filter, setFilter] = useState<'all' | 'waiting' | 'active' | 'resolved'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations: Conversation[] = [
    {
      id: '1',
      userName: 'Utilisateur #1',
      assistantName: 'Marie Dupont',
      lastMessage: 'Comment puis-je effectuer un transfert vers la France ?',
      timestamp: 'Il y a 5min',
      status: 'active',
      duration: '10min',
    },
    {
      id: '2',
      userName: 'Utilisateur #2',
      assistantName: 'Jean Martin',
      lastMessage: 'Merci pour votre aide !',
      timestamp: 'Il y a 15min',
      status: 'resolved',
      rating: 5,
      duration: '8min',
    },
    {
      id: '3',
      userName: 'Utilisateur #3',
      assistantName: 'Non assigné',
      lastMessage: 'Quels sont les frais de transfert ?',
      timestamp: 'Il y a 20min',
      status: 'waiting',
      duration: '20min',
    },
    {
      id: '4',
      userName: 'Utilisateur #4',
      assistantName: 'Sophie Bernard',
      lastMessage: 'Problème résolu, merci !',
      timestamp: 'Il y a 1h',
      status: 'resolved',
      rating: 4,
      duration: '15min',
    },
    {
      id: '5',
      userName: 'Utilisateur #5',
      assistantName: 'Non assigné',
      lastMessage: 'Je n\'arrive pas à me connecter',
      timestamp: 'Il y a 2min',
      status: 'waiting',
      duration: '2min',
    },
  ];

  const filteredConversations = conversations.filter((conv) => {
    const matchesFilter = filter === 'all' || conv.status === filter;
    const matchesSearch = 
      conv.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.assistantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: Conversation['status']) => {
    const styles = {
      waiting: 'bg-yellow-100 text-yellow-800',
      active: 'bg-blue-100 text-blue-800',
      resolved: 'bg-green-100 text-green-800',
    };
    const labels = {
      waiting: 'En attente',
      active: 'Active',
      resolved: 'Résolue',
    };
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const stats = {
    total: conversations.length,
    waiting: conversations.filter(c => c.status === 'waiting').length,
    active: conversations.filter(c => c.status === 'active').length,
    resolved: conversations.filter(c => c.status === 'resolved').length,
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Toutes les conversations</h1>
        <p className="text-gray-600">
          Supervision et analyse des conversations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-1">Total</p>
          <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-1">En attente</p>
          <p className="text-3xl font-bold text-yellow-600">{stats.waiting}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-1">Actives</p>
          <p className="text-3xl font-bold text-blue-600">{stats.active}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-1">Résolues</p>
          <p className="text-3xl font-bold text-green-600">{stats.resolved}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par utilisateur, assistant ou message..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-3 rounded-lg font-medium transition ${
                filter === 'all'
                  ? 'bg-[#2A4793] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setFilter('waiting')}
              className={`px-4 py-3 rounded-lg font-medium transition ${
                filter === 'waiting'
                  ? 'bg-[#2A4793] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              En attente
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-3 rounded-lg font-medium transition ${
                filter === 'active'
                  ? 'bg-[#2A4793] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Actives
            </button>
            <button
              onClick={() => setFilter('resolved')}
              className={`px-4 py-3 rounded-lg font-medium transition ${
                filter === 'resolved'
                  ? 'bg-[#2A4793] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Résolues
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredConversations.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">Aucune conversation trouvée</p>
          </div>
        ) : (
          filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
            >
              <div className="flex items-start gap-4">
                
                <div className="w-12 h-12 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  U{conversation.id}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-bold text-gray-900">{conversation.userName}</h3>
                      {getStatusBadge(conversation.status)}
                      {conversation.rating && (
                        <div className="flex items-center gap-1">
                          {[...Array(conversation.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#F7CE47] text-[#F7CE47]" />
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {conversation.timestamp}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {conversation.lastMessage}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Assistant: {conversation.assistantName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Durée: {conversation.duration}</span>
                    </div>
                  </div>
                </div>

                <button className="bg-[#2A4793] text-white px-4 py-2 rounded-lg hover:bg-[#1f356d] transition font-medium flex-shrink-0">
                  Voir détails
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
