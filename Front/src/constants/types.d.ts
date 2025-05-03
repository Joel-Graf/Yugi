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

type GameDTO = {
  id?: string;
  playerA: PlayerDTO;
  playerB?: PlayerDTO;
  playerTurn?: PlayerDTO;
  board?: Board;
  winner?: PlayerDTO;
};

type Message = {
  type: string;
  payload: string;
};

type Wall = {
  up: boolean;
  right: boolean;
  down: boolean;
  left: boolean;
}

type Position = {
  x: number;
  y: number;
}

type Tile = {
  position: Position;
  wall?: Wall;
  monster?: Monster;
}


type Board = {
  tiles: BoardTiles;
}

type BoardTiles = Array<Array<Tile>>;
