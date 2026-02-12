import { useState, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Message } from '@/types';

interface ChatbotProps {
  ws: WebSocket | null;
  roomName: string | null;
}

export function Chatbot({ ws, roomName }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!ws) return;

    ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      if (data.type === "welcome") {
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: data.message }
        ]);
        return;
      } 

      if (data.type === "ia.message") {
        setLoading(false);

        setMessages(prev => [
          ...prev,
          { sender: "bot", text: data.message}
        ])
      }

      if (data.type === "waiting") {
        setLoading(false);

        setMessages(prev => [
          ...prev,
          { sender: "bot", text: data.message}
        ])
      }

      if (data.type === "chat.message") {

        if (data.user_type === "customer") return;
        
        setLoading(false);
        
        setMessages(prev => [
          ...prev,
          { sender: "bot", text: data.message }
        ]);
      }
    };
  }, [ws]);

  const sendMessage = () => {
    if (!input.trim() || !ws) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    setLoading(true);

    ws.send(JSON.stringify({
      type: "chat.message",
      username: "customer",
      message: input,
      groupe_name: roomName,
      user_type: "customer",
    }));

    setInput("");
  };

  const getAvatar = (sender: string) => {
    if (sender === "bot") {
      return "🤖";
    }
    return "👤";
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3 }}
      className="w-[90vw] max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
    >
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="bg-[#2A4793] text-white p-4 font-semibold text-lg"
      >
        Cash Moov Assistant
      </motion.div>

      <div className="h-[450px] overflow-y-auto p-4 space-y-4 bg-gray-50">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start gap-2 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender != "user" && (
                <div className="text-2xl">
                  {getAvatar(msg.sender)}
                </div>
              )}
              <div 
                className={`px-4 py-2 rounded-xl max-w-[75%] text-sm shadow ${
                  msg.sender === "user"
                    ? "bg-[#2A4793] text-white rounded-br-none ml-auto"
                    : "bg-white text-gray-800 border rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === "user" && (
                <div className="text-2xl">
                  {getAvatar(msg.sender)}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="px-4 py-2 bg-white border rounded-xl text-gray-500 text-sm animate-pulse">
              Le bot écrit…
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-4 bg-white border-t flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A4793]"
          placeholder="Écrire un message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={sendMessage}
          className="bg-[#2A4793] text-white px-4 py-2 rounded-xl hover:bg-[#1f356d] transition w-full sm:w-auto flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Envoyer</span>
        </motion.button>
      </div>
    </motion.div>
  );
}


export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [roomName, setRoomName] = useState<string | null>(null);

  const openChat = () => {
    const newRoom = "conv_" + Date.now().toString();   
    setRoomName(newRoom);

    const baseUrl = import.meta.env.VITE_WS_BASE_URL;
    const wsUrl = `${baseUrl}${newRoom}/`;

    const socket = new WebSocket(wsUrl);     
    setWs(socket);

    setShowChat(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: open ? 1 : [1, 1.1, 1] }}
        transition={{
          scale: {
            repeat: open ? 0 : Infinity,
            duration: 2,
            ease: "easeInOut"
          }
        }}
        onClick={() => setOpen(!open)}
        className={`rounded-full shadow-xl flex items-center justify-center text-white transition cursor-pointer overflow-hidden
          ${open 
            ? "w-12 h-12 bg-[#F7CE47]"      
            : "w-16 h-16 bg-[#2A4793]"   
          }
        `}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full flex items-center justify-center"
            >
              <img 
                src='/images/sticker.png' 
                alt="Chat"
                className="w-14 h-14 object-contain" 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && !showChat && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-[90vw] max-w-sm bg-white shadow-2xl rounded-2xl p-6"
          >
            <motion.h3 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl font-semibold text-gray-900"
            >
              Bonjour 
            </motion.h3>

            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-gray-600 mt-1"
            >
              Comment pouvons‑nous vous aider ?
            </motion.p>

            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 space-y-3"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#2A4793] text-white py-3 rounded-xl font-medium hover:bg-[#1f356d] transition shadow-md"
                onClick={openChat}
              >
                Envoyer un message
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && showChat && (
          <div className="mt-4">
            <Chatbot ws={ws} roomName={roomName} /> 
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}