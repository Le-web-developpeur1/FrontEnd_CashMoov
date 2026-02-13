import { createContext, useContext, useEffect, useState } from "react";
import { useConversations } from "./ConversationsContext";

const NotifContext = createContext<WebSocket | null>(null);

export function NotifProvider({ children }: { children: React.ReactNode }) {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const { setConversations } = useConversations();

  useEffect(() => {
    const token = localStorage.getItem("access");
    const url = import.meta.env.VITE_WS_NOTIF_URL;
    if (!token || !url) return;

    const socket = new WebSocket(`${url}?token=${token}`);
    setWs(socket);

    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      if (data.type !== "notification") return;

      const group = data.groupe_name || data.group_name;
      if (!group) return;

      setConversations(prev => {
        const exists = prev.find(c => c.id === group);

        if (exists) {
          return prev.map(c =>
            c.id === group
              ? {
                  ...c,
                  lastMessage: data.message,
                  unreadCount: data.count,
                  messages: [
                    ...c.messages,
                    {
                      message: data.message,
                      username: data.username,
                      groupe_name: group,
                      user_type: data.user_type,
                      timestamp: new Date()
                    }
                  ]
                }
              : c
          );
        }

        return [
          {
            id: group,
            userName: group,
            lastMessage: data.message,
            unreadCount: data.count,
            messages: [
              {
                message: data.message,
                username: data.username,
                groupe_name: group,
                user_type: data.user_type,
                timestamp: new Date()
              }
            ]
          },
          ...prev
        ];
      });
    };

    socket.addEventListener("message", handleMessage);

    socket.onopen = () => console.log("Notifications connecté");
    socket.onclose = () => console.log("Notifications fermé");

    return () => {
      socket.removeEventListener("message", handleMessage);
      socket.close();
    };
  }, [setConversations]);

  return (
    <NotifContext.Provider value={ws}>
      {children}
    </NotifContext.Provider>
  );
}

export function useNotifWS() {
  return useContext(NotifContext);
}
