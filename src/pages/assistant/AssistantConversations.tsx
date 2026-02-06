import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Clock, Search } from 'lucide-react';

interface Conversation {
  id: string;
  userName: string;
  lastMessage: string;
  timestamp: string;
  status: 'waiting' | 'active' | 'resolved';
  unreadCount: number;
  priority: 'low' | 'medium' | 'high';
}

export default function AssistantConversations() {
  const [filter, setFilter] = useState<'all' | 'waiting' | 'active' | 'resolved'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations: Conversation[] = [
    {
      id: '1',
      userName: 'Utilisateur #1',
      lastMessage: 'Comment puis-je effectuer un transfert vers la France ?',
      timestamp: 'Il y a 5min',
      status: 'waiting',
      unreadCount: 3,
      priority: 'high',
    },
    {
      id: '2',
      userName: 'Utilisateur #2',
      lastMessage: 'Merci pour votre aide !',
      timestamp: 'Il y a 15min',
      status: 'active',
      unreadCount: 0,
      priority: 'medium',
    },
    {
      id: '3',
      userName: 'Utilisateur #3',
      lastMessage: 'Quels sont les frais de transfert ?',
      timestamp: 'Il y a 20min',
      status: 'waiting',
      unreadCount: 2,
      priority: 'medium',
    },
    {
      id: '4',
      userName: 'Utilisateur #4',
      lastMessage: 'Problème résolu, merci !',
      timestamp: 'Il y a 1h',
      status: 'resolved',
      unreadCount: 0,
      priority: 'low',
    },
    {
      id: '5',
      userName: 'Utilisateur #5',
      lastMessage: 'Je n\'arrive pas à me connecter',
      timestamp: 'Il y a 2min',
      status: 'waiting',
      unreadCount: 5,
      priority: 'high',
    },
  ];

  const filteredConversations = conversations.filter((conv) => {
    const matchesFilter = filter === 'all' || conv.status === filter;
    const matchesSearch = conv.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  const getPriorityColor = (priority: Conversation['priority']) => {
    const colors = {
      high: 'border-red-500',
      medium: 'border-orange-500',
      low: 'border-gray-300',
    };
    return colors[priority];
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes conversations</h1>
        <p className="text-gray-600">
          {filteredConversations.length} conversation(s)
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une conversation..."
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
            <Link
              key={conversation.id}
              to={`/assistant/chat/${conversation.id}`}
              className={`block bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-l-4 ${getPriorityColor(conversation.priority)}`}
            >
              <div className="flex items-start gap-4">
                
                <div className="w-12 h-12 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  U{conversation.id}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-gray-900">{conversation.userName}</h3>
                      {getStatusBadge(conversation.status)}
                      {conversation.unreadCount > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {conversation.unreadCount}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {conversation.timestamp}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {conversation.lastMessage}
                  </p>
                </div>

                <button className="bg-[#2A4793] text-white px-4 py-2 rounded-lg hover:bg-[#1f356d] transition font-medium flex-shrink-0">
                  Répondre
                </button>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
