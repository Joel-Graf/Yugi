import { db } from "../config/database";
import { GameDTO } from "../constants/dtos";

const getGames = async (): Promise<GameDTO[]> => {
  const collection = db.collection("users");

  const vapo = await collection.find().toArray();
  console.log("vapo: ", vapo);
  return [];
};

export default { getGames };
