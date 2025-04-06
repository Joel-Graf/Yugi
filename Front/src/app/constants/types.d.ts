type MonsterMode = "ATK" | "DEF";

type MonsterStatus = "ALIVE" | "DESTROYED";

type MonsterDTO = {
  code: string;
  name: string;
  stars: number;
  atk: number;
  def: number;
  description: string;
  mode?: MonsterMode;
  status?: MonsterStatus;
};

type PositionDTO = {
  x: number;
  y: number;
};

type PlayerDTO = {
  id: number;
  monsters: Array<MonsterDTO>;
};

type TileDTO = {
  position: PositionDTO;
  monster?: MonsterDTO;
};

type BoardDTO = {
  tiles: Array<TileDTO>;
};

type GameDTO = {
  id?: string;
  playerA: PlayerDTO;
  playerB?: PlayerDTO;
  playerTurn?: PlayerDTO;
  board?: BoardDTO;
  winner?: PlayerDTO;
};
