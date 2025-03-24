import { POSITION_LIMITS } from "@/constants/constants";
import styles from "./board.module.css";
import Tile from "../Tile/tile";
import { useWebSocket } from "@/contexts/WebSocketContext";
import { useEffect } from "react";

export default function Board() {
  const { ws, message, sendMessage } = useWebSocket();

  function renderBoard() {
    const rows = [];
    for (let y = 0; y <= POSITION_LIMITS.Y_UPPER; y++) {
      const tilesOfRow = [];

      for (let x = 0; x <= POSITION_LIMITS.X_UPPER; x++) {
        tilesOfRow.push(
          <Tile key={`tile:(${x}, ${y})`} t={`(${x}, ${y})`}></Tile>
        );
      }

      rows.push(
        <div key={`row:${y}`} className={styles.row}>
          {tilesOfRow}
        </div>
      );
    }

    return <div className={styles.column}>{rows}</div>;
  }

  // return <div className={styles.container}>{renderBoard()}</div>;

  useEffect(() => {
    if (ws) {
      // Exemplo de como enviar uma mensagem depois que o WebSocket está conectado
      ws.onopen = () => {
        sendMessage({ "Mensagem inicial": "teste" });
      };
    }
  }, [ws, sendMessage]);

  return (
    <div>
      <h2>Mensagem recebida do WebSocket:</h2>
      <p>{message}</p>
      <button onClick={() => sendMessage("Mensagem de teste")}>
        Enviar mensagem
      </button>
    </div>
  );
}
