import { Router } from "express";
import gameService from "../services/game";

const router = Router();

router.get("/", async (req, res) => {
  const games = await gameService.getGames();
  res.json(games);
});

export default router;
