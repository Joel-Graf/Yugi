import { Server } from "http";
import WebSocket from "ws";
import { GameDTO } from "../constants/dtos";
import { getInitialBoardState } from "../utils/boardHelper";

let webSocketServer: WebSocket.Server;

type GameEntry = {
  game: GameDTO;
  sockets: Set<WebSocket>;
};

const gamesMap = new Map<string, GameEntry>();

export function connectWS(httpServer: Server) {
  webSocketServer = new WebSocket.Server({ server: httpServer });

  webSocketServer.on("connection", (clientWs: WebSocket) => {
    console.log("Novo cliente conectado!");

    clientWs.on("message", (message: string) => {
      const data = JSON.parse(message);

      console.log("DATA <<< ", data);

      if (data.type === "join_game") {
        joinGame(clientWs, data.payload);
      }
    });

    clientWs.on("close", () => {
      leaveRoom(clientWs);
    });
  });
}

function joinGame(ws: WebSocket, gameId: string) {
  if (!gamesMap.has(gameId)) {
    const initialBoard = getInitialBoardState();
    gamesMap.set(gameId, { game: { playerA: { id: 1, monsters: [] }, board: initialBoard }, sockets: new Set() });
  }

  gamesMap.get(gameId)!.sockets.add(ws);
  console.log(`Você entrou na sala ${gameId}`);
}

function sendMessageToRoom(gameId: string, message: string) {
  if (!gamesMap.has(gameId)) return;

  for (const member of gamesMap.get(gameId)!.sockets) {
    if (member.readyState === WebSocket.OPEN) {
      member.send(message);
    }
  }
}

function leaveRoom(ws: WebSocket) {
  for (const [gameId, gameEntries] of gamesMap.entries()) {
    const { sockets } = gameEntries;
    if (sockets.has(ws)) {
      sockets.delete(ws);
      if (sockets.size === 0) {
        gamesMap.delete(gameId);
      }
      break;
    }
  }
}
