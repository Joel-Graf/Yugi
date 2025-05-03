import { Server } from "http";
import WebSocket from "ws";
import { Player } from "../classes/Player";
import { Game } from "../classes/Game";
import { Board } from "../classes/Board";
import { GameEvent } from "../constants/types";

let webSocketServer: WebSocket.Server;

type GameEntry = {
  game: Game;
  sockets: Set<WebSocket>;
};

const gamesMap = new Map<string, GameEntry>();

export function connectWS(httpServer: Server) {
  webSocketServer = new WebSocket.Server({ server: httpServer });

  webSocketServer.on("connection", (clientWs: WebSocket) => {
    clientWs.on("message", (message: string) => {
      console.log("gamesMap: ", gamesMap);

      const { type, payload }: GameEvent = JSON.parse(message);

      switch (type) {
        case "CREATE_SINGLE_PLAYER_GAME":
          createSinglePlayerGame(clientWs);
          break;
        case "JOIN_GAME":
          const id = payload?.gameID ?? "";
          joinGame(clientWs, id);
          break;
        case "START_GAME":
          // statement N
          break;
        default:
          throw new Error("Invalid GameEvent type!");
      }
    });

    clientWs.on("close", () => {
      leaveRoom(clientWs);
    });
  });
}

function createSinglePlayerGame(clientWs: WebSocket) {
  const playerA = new Player(1);
  const board = new Board();
  const game = new Game(playerA, true, board);
  const id = "teste_id";
  const sockets = new Set<WebSocket>().add(clientWs);

  gamesMap.set(id, { game, sockets });
}

function joinGame(clientWs: WebSocket, gameID: string) {
  if (!gamesMap.has(gameID)) return;

  gamesMap.get(gameID)!.sockets.add(clientWs);
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
