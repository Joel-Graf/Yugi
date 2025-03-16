import { Request, Response } from "express";
import service from "../services/game";

export const getUsers = (req: Request, res: Response) => {
  const users = service.getUsers();
  console.log("vapo")
  return res.json(users);
};
