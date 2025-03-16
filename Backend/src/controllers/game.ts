import { Router } from "express";
import gameService from "../services/game";

const router = Router();

router.get("/", async (req, res) => {
  const users = await gameService.getUsers();
  // TODO: Error middleware
  throw new Error("Something went wrong");
  res.json(users);
});

export default router;
