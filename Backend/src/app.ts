import "express-async-errors";
import express from "express";
import router from "./controllers/controller";
import errorMiddleware from "./middlewares/error";
import { WebSocketServer } from "ws";
import http from "http";
import { connectDB } from "./config/database";
const cors = require("cors");

connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorMiddleware);

const httpServer = http.createServer(app);
const webSocketServer = new WebSocketServer({ server: httpServer });

webSocketServer.on("connection", (ws) => {
  console.log("Cliente WebSocket conectado");

  ws.on("error", console.error);

  ws.on("message", (data) => {
    console.log(`Mensagem WebSocket recebida: ${data.toString()}`);
  });

  ws.send("Conexão WebSocket estabelecida!");
});

httpServer.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
