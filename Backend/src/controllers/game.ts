import { GameDTO, PlayerDTO } from "./../constants/dtos";
import { Router } from "express";
import gameService from "../services/game";
import { ObjectId } from "mongodb";

const router = Router();

router.get("/", async (req, res) => {
  const games = await gameService.getGames();
  res.json(games);
});

router.post("/", async (req, res) => {
  const playerCreatingGame: PlayerDTO = req.body;
  const result = await gameService.createGame(playerCreatingGame);
  res.status(201).json(result);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updateData: Partial<GameDTO> = req.body;

  const objectId = new ObjectId(id);
  const result = await gameService.updateGame(objectId, updateData);
  res.status(200).json(result);
});
export default router;
