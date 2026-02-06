import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Message } from '@/types';
import { chatbotAPI } from '@/utils/api';

export function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([
        { sender: "bot", text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?"}
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        const userInput = input;
        setInput("");
        setLoading(true);

        try {
            const data = await chatbotAPI.sendMessage({
                question: userInput
            });
            
            const botMessage: Message = { 
                sender: "bot", 
                text: data.response || data.answer || "Pas de réponse"
            };
            setMessages((prev) => [...prev, botMessage]);
            
        } catch (error) {
            console.error('Erreur chatbot:', error);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Désolé, une erreur est survenue. Veuillez réessayer."}
            ]);
        }

        setLoading(false);
    };

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
                  className={`px-4 py-2 rounded-xl max-w-[75%] text-sm shadow ${
                    msg.sender === "user"
                      ? "bg-[#2A4793] text-white rounded-br-none ml-auto"
                      : "bg-white text-gray-800 border rounded-bl-none"
                  }`}
                >
                  {msg.text}
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

  return (
    <div className="fixed bottom-6 right-6 z-50">

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          scale: open ? 1 : [1, 1.1, 1],
        }}
        transition={{
          scale: {
            repeat: open ? 0 : Infinity,
            duration: 2,
            ease: "easeInOut"
          }
        }}
        onClick={() => setOpen(!open)}
        className={`rounded-full shadow-xl flex items-center justify-center text-white transition cursor-pointer
          ${open 
            ? "w-12 h-12 bg-red-500 hover:bg-red-600"      
            : "w-16 h-16 bg-[#2A4793] hover:bg-[#1f356d]"   
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
            >
              <MessageCircle className="w-8 h-8" />
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
                onClick={() => setShowChat(true)}
                className="w-full bg-[#2A4793] text-white py-3 rounded-xl font-medium hover:bg-[#1f356d] transition shadow-md"
              >
                Envoyer un message
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border py-3 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                Trouver une réponse
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 space-y-3"
            >
              <p className="text-gray-700 font-medium">Questions fréquentes</p>

              <div className="text-sm text-gray-600 space-y-2">
                <motion.p 
                  whileHover={{ x: 5, color: "#2A4793" }}
                  className="cursor-pointer"
                >
                  Quels sont les frais CashMoov ?
                </motion.p>
                <motion.p 
                  whileHover={{ x: 5, color: "#2A4793" }}
                  className="cursor-pointer"
                >
                  Comment envoyer de l'argent ?
                </motion.p>
                <motion.p 
                  whileHover={{ x: 5, color: "#2A4793" }}
                  className="cursor-pointer"
                >
                  Comment changer mon code secret ?
                </motion.p>
                <motion.p 
                  whileHover={{ x: 5, color: "#2A4793" }}
                  className="cursor-pointer"
                >
                  Où trouver un point CashMoov ?
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && showChat && (
          <div className="mt-4">
            <Chatbot />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
