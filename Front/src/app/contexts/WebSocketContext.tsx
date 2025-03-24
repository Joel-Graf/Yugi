import React, { createContext, useContext, useEffect, useState } from "react";

// Defina o tipo para o WebSocket
type WebSocketContextType = {
  ws: WebSocket | null;
  message: string;
  sendMessage: (msg: string) => void;
};

// Criação do contexto
const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);

// Provedor de contexto
interface WebSocketProviderProps {
  children: React.ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
}) => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.onopen = () => {
      console.log("Conexão WebSocket estabelecida");
      socket.send(JSON.stringify({ type: "join_room", payload: "room1" }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessage(data.message); // Atualiza o estado com a mensagem recebida
    };

    socket.onclose = () => {
      console.log("Conexão WebSocket fechada");
    };

    socket.onerror = (error) => {
      console.error("Erro no WebSocket:", error);
    };

    setWs(socket);

    // Limpeza da conexão quando o componente for desmontado
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (msg: string) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(msg); // Envia uma mensagem através da conexão WebSocket
    }
  };

  return (
    <WebSocketContext.Provider value={{ ws, message, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

// Hook customizado para acessar o contexto WebSocket
export const useWebSocket = (): WebSocketContextType => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocket deve ser usado dentro do WebSocketProvider");
  }
  return context;
};
