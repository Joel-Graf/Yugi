import { Router } from "express";
import gameService from "../services/game";

const router = Router();

router.get("/", async (req, res) => {
  const users = await gameService.getUsers();
  res.json(users);
});

export default router;
