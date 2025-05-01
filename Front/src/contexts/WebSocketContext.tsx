import React, { createContext, useContext, useEffect, useState } from "react";

type WebSocketContextType = {
  sendMessage: (msg: Message) => void;
};

const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);
interface WebSocketProviderProps {
  children: React.ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
}) => {
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.onopen = () => {
      console.log("Conexão WebSocket estabelecida");
    };

    socket.onmessage = (event) => {
      console.log("event.data <<< ", event.data);
    };

    socket.onclose = () => {
      console.log("Conexão WebSocket fechada");
    };

    socket.onerror = (error) => {
      console.error("Erro no WebSocket:", error);
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (msg: Message) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(msg));
    }
  };

  return (
    <WebSocketContext.Provider value={{ sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = (): WebSocketContextType => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocket deve ser usado dentro do WebSocketProvider");
  }
  return context;
};
