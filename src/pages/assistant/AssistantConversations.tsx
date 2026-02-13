import { useNavigate } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { useConversations } from '@/contexts/ConversationsContext';

export default function AssistantConversations() {
  const navigate = useNavigate();
  const { conversations } = useConversations();

  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes conversations</h1>
        <p className="text-gray-600">Gérer vos conversations avec les clients</p>
      </div>

      <div className="space-y-4">
        {(!conversations || conversations.length === 0) ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Aucune conversation assignée</p>
            <p className="text-sm text-gray-500">
              Les nouvelles demandes apparaîtront ici automatiquement
            </p>
          </div>
        ) : (
          conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => navigate(`/assistant/chat/${conversation.id}`)}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 relative">
                  {conversation.userName.charAt(0).toUpperCase()}

                  {conversation.unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900">{conversation.userName}</h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {conversation.lastMessage}
                  </p>
                </div>

                <button 
                  className="bg-[#2A4793] text-white px-4 py-2 rounded-lg hover:bg-[#1f356d] transition font-medium flex-shrink-0"
                >
                  Répondre
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
