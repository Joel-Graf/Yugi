import { WebSocketServer } from "ws";
import dotenv from "dotenv";
import { Server } from "http";

dotenv.config();

let webSocketServer: WebSocketServer;

function connectWS(httpServer: Server) {
  webSocketServer = new WebSocketServer({ server: httpServer });

  webSocketServer.on("connection", (ws) => {
    console.log("Cliente WebSocket conectado");

    ws.on("error", console.error);

    ws.on("message", (data) => {
      console.log(`Mensagem WebSocket recebida: ${data.toString()}`);
    });

    ws.send("Conexão WebSocket estabelecida!");
  });

  return webSocketServer;
}

export { connectWS };
