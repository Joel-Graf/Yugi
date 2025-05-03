import { Tile } from "../constants/types";

export class Board {
  tiles: Array<Array<Tile>>;

  constructor() {
    this.tiles = Array.from({ length: BOARD_WIDTH }, (_, x) =>
      Array.from({ length: BOARD_HEIGHT }, (_, y): Tile => {
        const positionString = `(${x},${y})`;

        const tileWithoutWall = {
          position: { x, y },
        };

        return BOARD_WALLS_BY_POSITION_STRING[positionString]
          ? BOARD_WALLS_BY_POSITION_STRING[positionString]
          : tileWithoutWall;
      })
    );
  }
}

const BOARD_HEIGHT = 14;
const BOARD_WIDTH = 11;

const BOARD_WALLS_BY_POSITION_STRING: Record<string, Tile> = {
  "(0,0)": {
    position: {
      x: 0,
      y: 0,
    },
    wall: {
      up: false,
      right: false,
      down: true,
      left: true,
    },
  },
  "(1,0)": {
    position: {
      x: 1,
      y: 0,
    },
    wall: {
      up: false,
      right: true,
      down: true,
      left: false,
    },
  },
  "(2,0)": {
    position: {
      x: 2,
      y: 0,
    },
    wall: {
      up: false,
      right: false,
      down: true,
      left: true,
    },
  },
  "(3,0)": {
    position: {
      x: 3,
      y: 0,
    },
    wall: {
      up: true,
      right: false,
      down: true,
      left: false,
    },
  },
  "(4,0)": {
    position: {
      x: 4,
      y: 0,
    },
    wall: {
      up: false,
      right: false,
      down: true,
      left: false,
    },
  },
};

