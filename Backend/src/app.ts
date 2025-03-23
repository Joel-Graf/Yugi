import "express-async-errors";
import express from "express";
import router from "./controllers/controller";
import errorMiddleware from "./middlewares/error";
import { WebSocketServer } from "ws";
import http from "http";
import { connectDB } from "./config/database";
const cors = require("cors");
import dotenv from "dotenv";
import { connectWS } from "./config/websocket";

dotenv.config();
connectDB();

const app = express();
const APP_PORT = process.env.APP_PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorMiddleware);

const httpServer = http.createServer(app);
connectWS(httpServer);

httpServer.listen(APP_PORT, () => {
  console.log(`Server is running at http://localhost:${APP_PORT}`);
});
