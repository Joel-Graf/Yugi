import { Server } from "http";
import WebSocket from "ws";

let webSocketServer: WebSocket.Server;
const gamesWebSockets = new Map<string, Set<WebSocket>>();

export function connectWS(httpServer: Server) {
  webSocketServer = new WebSocket.Server({ server: httpServer });

  webSocketServer.on("connection", (clientWs: WebSocket) => {
    console.log("Novo cliente conectado!");

    clientWs.on("message", (message: string) => {
      const data = JSON.parse(message);

      console.log("DATA <<< ", data);

      if (data.type === "join_room") {
        joinRoom(clientWs, data.payload);
      }
    });

    clientWs.on("close", () => {
      leaveRoom(clientWs);
    });
  });
}

function joinRoom(ws: WebSocket, gameId: string) {
  if (!gamesWebSockets.has(gameId)) {
    gamesWebSockets.set(gameId, new Set());
  }

  gamesWebSockets.get(gameId)!.add(ws);
  ws.send(`Você entrou na sala ${gameId}`);
}

function sendMessageToRoom(gameId: string, message: string) {
  if (!gamesWebSockets.has(gameId)) return;

  for (const member of gamesWebSockets.get(gameId)!) {
    if (member.readyState === WebSocket.OPEN) {
      member.send(message);
    }
  }
}

function leaveRoom(ws: WebSocket) {
  for (const [gameId, members] of gamesWebSockets.entries()) {
    if (members.has(ws)) {
      members.delete(ws);
      if (members.size === 0) {
        gamesWebSockets.delete(gameId);
      }
      break;
    }
  }
}
