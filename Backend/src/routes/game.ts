import { Router } from "express";
import gameService from "../services/game";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await gameService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários", error });
  }
});

export default router;
