import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

interface ChatMessages {
  message: string;
  username: string;
  groupe_name: string;
  user_type: string;
}

interface Conversation {
  id: string;          
  userName: string;    
  lastMessage: string; 
  unreadCount: number;
  messages: ChatMessages[]; 
}

export default function AssistantConversations() {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("access");
    const url = import.meta.env.VITE_WS_NOTIF_URL;

    if (!token || !url) {
      console.warn("Token ou URL WebSocket manquant");
      return;
    }

    const wsNotif = new WebSocket(`${url}?token=${token}`);

    wsNotif.onopen = () => {
      console.log("🔗 WebSocket notifications connecté");
    };

    wsNotif.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "notification") {
        setConversations(prev => {
          const exists = prev.find(c => c.id === data.groupe_name);

          if (exists) {
            return prev.map(c =>
              c.id === data.groupe_name
                ? {
                    ...c,
                    lastMessage: data.message,
                    unreadCount: data.count
                  }
                : c
            );
          }

          return [
            {
              id: data.groupe_name,
              userName: data.username || "Client",
              lastMessage: data.message,
              unreadCount: data.count,
              messages: [
                {
                  message: data.message,
                  username: data.username,
                  groupe_name: data.groupe_name,
                  user_type: "customer"
                }
              ]
            },
            ...prev
          ];
        });
      }
    };

    wsNotif.onerror = () => {
      console.error("❌ Erreur WebSocket notifications");
    };

    wsNotif.onclose = () => {
      console.log("🔌 WebSocket notifications fermé");
    };

    return () => wsNotif.close();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes conversations</h1>
        <p className="text-gray-600">Gérer vos conversations avec les clients</p>
      </div>

      <div className="space-y-4">
        {conversations.length === 0 ? (
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
              onClick={() => { 
                navigate(`/assistant/chat/${conversation.id}`, {
                  state: { messages: conversation.messages }
                }); 
              }}
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
