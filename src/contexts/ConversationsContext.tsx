import { createContext, useContext, useState } from 'react';

export interface ChatMessage {
  message: string;
  username: string;
  groupe_name: string;
  user_type: string;
  timestamp?: Date;
}

interface Conversation {
  id: string;
  userName: string;
  lastMessage: string;
  unreadCount: number;
  messages: ChatMessage[];
}

interface ConversationsContextValue {
  conversations: Conversation[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
}

const ConversationsContext = createContext<ConversationsContextValue | null>(null);

export function ConversationsProvider({ children }: { children: React.ReactNode }) {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  return (
    <ConversationsContext.Provider value={{ conversations, setConversations }}>
      {children}
    </ConversationsContext.Provider>
  );
}

export function useConversations() {
  const ctx = useContext(ConversationsContext);
  if (!ctx) {
    throw new Error('useConversations must be used inside ConversationsProvider');
  }
  return ctx;
}
