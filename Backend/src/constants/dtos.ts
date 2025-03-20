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
  monster?: MonsterDTO;
};

export type BoardDTO = {
  tiles: Array<TileDTO>;
};

export type GameDTO = {
  player: PlayerDTO;
  oponentPlayer: PlayerDTO;
  isPlayerTurn: boolean;
  board: BoardDTO;
  winner?: PlayerDTO;
};
