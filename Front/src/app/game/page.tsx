"use client";

import Board from "../components/Board/board";

export default function Game() {
  // const socket = new WebSocket("ws://localhost:3003");

  // socket.onopen = () => {
  //   console.log("Conectado ao servidor!");
  //   socket.send("Olá, servidor!");
  // };

  // socket.onmessage = (event) => {
  //   console.log("Mensagem do servidor:", event.data);
  // };

  return <Board />;
}
