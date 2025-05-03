import { Document, ObjectId, WithId } from "mongodb";
import { db } from "../config/database";
import { GameDTO, PlayerDTO } from "../constants/dtos";

const getGames = async (): Promise<WithId<Document>[]> => {
  const collection = db.collection("games");
  const result = await collection.find().toArray();
  return result;
};

const getGameById = async (id: string): Promise<WithId<Document> | null> => {
  const collection = db.collection("games");
  const objectId = new ObjectId(id);
  const result = await collection.findOne({ _id: objectId });
  return result;
};

const createGame = async (playerCreatingGame: PlayerDTO): Promise<ObjectId> => {
  const collection = db.collection("games");
  const result = await collection.insertOne({ playerA: playerCreatingGame, board: {} });
  return result.insertedId;
};

const updateGame = async (
  id: ObjectId,
  partialGameDTO: Partial<GameDTO>
): Promise<ObjectId | null> => {
  const collection = db.collection("games");
  const filter = { _id: id };
  const result = await collection.updateOne(filter, { $set: partialGameDTO });
  return result.upsertedId;
};

export default { getGames, getGameById, createGame, updateGame };
