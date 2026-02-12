import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Send, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface Message {
  message: string;
  username: string;
  user_type: string; 
  timestamp?: Date;
}

export default function AssistantChat() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = location.state?.messages || [];
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');

  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token || !id) return;

    const ws = new WebSocket(
      `${import.meta.env.VITE_WS_BASE_URL}${id}/?token=${token}`
    );
    wsRef.current = ws;
    console.log("WS URL:", `${import.meta.env.VITE_WS_CHAT_URL}${id}/?token=${token}`);

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "chat.message",
        groupe_name: id,
        username: user?.first_name
      }));

    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "history") {
        const historyMessages = data.data.map((m: any) => ({
          message: m.message,
          username: m.username,
          user_type: m.user_type || "customer",
          timestamp: new Date(),
        }));

        setMessages(historyMessages);
        return;
      }
      if (data.type === "ia.message") {
        const group = data.groupe_name || data.group_name;

        setMessages(prev => [
          ...prev,
          {
            message: data.message,
            username: data.username,
            user_type: data.user_type,
            timestamp: new Date(),
          }
        ])
      }

      if (data.type === "chat.message") {
        const group = data.groupe_name || data.group_name;

        setMessages(prev => [
          ...prev,
          {
            message: data.message,
            username: data.username,
            user_type: data.user_type,
            timestamp: new Date(),
          }
        ]);
      }
    };

    ws.onerror = () => {
      console.error("WS ERROR :", event);
      console.log("Erreur WebSocket chat")
    };
    ws.onclose = () => {
      console.log("🔌 Chat fermé");
      console.warn("WS CLOSED :", event);
    }

    return () => ws.close();
  }, [id]);

  const handleSendMessage = (e: React.FormEvent) => {
  e.preventDefault();
  if (!inputMessage.trim()) return;

  const msg = {
    type: "chat.message",
    username: user?.first_name || "Assistant",
    groupe_name: id,
    message: inputMessage,
    user_type: "assistant",
  };

  console.log("📤 Tentative d'envoi :", msg);
  console.log("📡 WebSocket state :", wsRef.current?.readyState);

  wsRef.current?.send(JSON.stringify(msg));

  setMessages(prev => [
    ...prev,
    { ...msg, timestamp: new Date() }
  ]);

  setInputMessage('');
};


  const formatTime = (date?: Date) => {
    if (!date) return '';
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const getSenderType = (msg: Message) => {
    if (msg.user_type === 'assistant') return 'assistant';
    if (msg.user_type === 'ia') return 'bot';
    return 'user';
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex">
      <div className="flex-1 bg-white rounded-xl shadow-md flex flex-col">
        
        <div className="p-4 border-b flex items-center gap-4">
          <button
            onClick={() => navigate('/assistant/conversations')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="w-10 h-10 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold">
            {id?.charAt(0).toUpperCase()}
          </div>

          <h2 className="font-bold text-gray-900">Conversation {id}</h2>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message, index) => {
            const senderType = getSenderType(message);
            return (
              <div
                key={index}
                className={`flex ${senderType === 'assistant' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    senderType === 'assistant'
                      ? 'bg-[#2A4793] text-white rounded-br-none'
                      : senderType === 'bot'
                      ? 'bg-yellow-100 text-gray-800 rounded-bl-none border border-yellow-200'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {senderType !== 'assistant' && (
                    <p className="text-xs font-semibold mb-1 opacity-70">
                      {senderType === 'bot' ? `🤖 ${message.username}` : message.username}
                    </p>
                  )}

                  <p className="text-sm leading-relaxed">{message.message}</p>

                  <p className="text-xs mt-1 opacity-60">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            );
          })}

          <div ref={messagesEndRef} />
        </div>

        {/* INPUT */}
        <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Écrire un message..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="bg-[#2A4793] text-white px-6 py-3 rounded-lg hover:bg-[#1f356d] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
