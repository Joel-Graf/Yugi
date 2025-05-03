import { MonsterMode, MonsterStatus } from "./types";

export type MonsterDTO = {
  code: string;
  name: string;
  stars: number;
  atk: number;
  def: number;
  description: string;
  mode?: MonsterMode;
  status?: MonsterStatus;
};

export type PositionDTO = {
  x: number;
  y: number;
};

export type PlayerDTO = {
  id: number;
  monsters: Array<MonsterDTO>;
};

export type TileDTO = {
  position: PositionDTO;
  wall?: WallDTO;
  monster?: MonsterDTO;
};

export type WallDTO = {
  up: boolean;
  right: boolean;
  down: boolean;
  left: boolean;
};

export type BoardDTO = Array<Array<TileDTO>>;

export type GameDTO = {
  playerA: PlayerDTO;
  playerB?: PlayerDTO;
  playerTurn?: PlayerDTO;
  board?: BoardDTO;
  winner?: PlayerDTO;
}
