import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, User, CheckCircle, Clock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface Message {
  id: string;
  sender: 'user' | 'assistant' | 'bot';
  text: string;
  timestamp: Date;
}

export default function AssistantChat() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'user',
      text: 'Bonjour, j\'aimerais savoir comment effectuer un transfert vers la France ?',
      timestamp: new Date(Date.now() - 600000),
    },
    {
      id: '2',
      sender: 'bot',
      text: 'Bonjour ! Je vais transférer votre demande à un assistant humain qui pourra mieux vous aider.',
      timestamp: new Date(Date.now() - 590000),
    },
    {
      id: '3',
      sender: 'user',
      text: 'D\'accord, merci !',
      timestamp: new Date(Date.now() - 580000),
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [conversationStatus, setConversationStatus] = useState<'active' | 'resolved'>('active');

  const userInfo = {
    name: 'Utilisateur #' + id,
    email: 'user' + id + '@example.com',
    phone: '+224 621 234 567',
    joinedAt: 'Il y a 15 minutes',
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'assistant',
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

  };

  const handleResolve = () => {
    if (confirm('Marquer cette conversation comme résolue ?')) {
      setConversationStatus('resolved');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      
      <div className="flex-1 bg-white rounded-xl shadow-md flex flex-col">
        
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/assistant/conversations')}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 bg-[#2A4793] rounded-full flex items-center justify-center text-white font-semibold">
              U{id}
            </div>
            <div>
              <h2 className="font-bold text-gray-900">{userInfo.name}</h2>
              <p className="text-sm text-gray-500">En ligne</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {conversationStatus === 'active' ? (
              <button
                onClick={handleResolve}
                className="bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition flex items-center gap-2 font-medium"
              >
                <CheckCircle className="w-4 h-4" />
                Marquer comme résolu
              </button>
            ) : (
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
                <CheckCircle className="w-4 h-4" />
                Résolu
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'assistant' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                  message.sender === 'assistant'
                    ? 'bg-[#2A4793] text-white rounded-br-none'
                    : message.sender === 'bot'
                    ? 'bg-yellow-100 text-gray-800 rounded-bl-none border border-yellow-200'
                    : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                }`}
              >
                {message.sender === 'bot' && (
                  <p className="text-xs font-semibold text-yellow-700 mb-1">🤖 Bot</p>
                )}
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'assistant' ? 'text-white/70' : 'text-gray-500'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {conversationStatus === 'active' && (
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
        )}
      </div>

      <div className="w-80 bg-white rounded-xl shadow-md p-6 space-y-6">
        
        <div className="text-center">
          <div className="w-20 h-20 bg-[#2A4793] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            U{id}
          </div>
          <h3 className="font-bold text-gray-900 text-lg">{userInfo.name}</h3>
          <p className="text-sm text-gray-500">{userInfo.joinedAt}</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Informations</h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm text-gray-900">{userInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Téléphone</p>
                <p className="text-sm text-gray-900">{userInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Temps d'attente</p>
                <p className="text-sm text-gray-900">15 minutes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Réponses rapides</h4>
          
          <div className="space-y-2">
            {[
              'Bonjour ! Comment puis-je vous aider ?',
              'Je vérifie cela pour vous...',
              'Pouvez-vous me donner plus de détails ?',
              'Merci pour votre patience !',
            ].map((response, index) => (
              <button
                key={index}
                onClick={() => setInputMessage(response)}
                className="w-full text-left text-sm bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-lg transition"
              >
                {response}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Historique</h4>
          <p className="text-sm text-gray-600">
            Première conversation avec cet utilisateur
          </p>
        </div>
      </div>
    </div>
  );
}
