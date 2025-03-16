import { Router } from "express";
import gameController from "../controllers/game";

const router = Router();

router.use("/game", gameController);

export default router;
