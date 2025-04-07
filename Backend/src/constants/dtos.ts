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

// <----> 11 // \/ /\ 14
export type BoardDTO = Array<Array<TileDTO>>;

export interface GameDTO {
  playerA: PlayerDTO;
  playerB?: PlayerDTO;
  playerTurn?: PlayerDTO;
  board?: BoardDTO;
  winner?: PlayerDTO;
}
