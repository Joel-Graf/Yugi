import { Tile } from "./Tile";
import { Position } from "./Position";
import { POSITION_LIMITS } from "../constants/constants";

export interface BoardDTO {
  tiles: Array<Tile>;
}

class Board implements BoardDTO {
  tiles: Array<Tile>;

  constructor() {
    const tiles = [];

    // Order: columns from left to right, rows from bottom to top;
    for (let x = POSITION_LIMITS.X_LOWER; x <= POSITION_LIMITS.X_UPPER; x++) {
      for (let y = POSITION_LIMITS.Y_LOWER; y <= POSITION_LIMITS.Y_UPPER; y++) {
        const position = new Position(x, y);
        const tile = new Tile(position);
        tiles.push(tile);
      }
    }

    this.tiles = tiles;
  }

  getTiles() {
    return this.tiles;
  }
}

export { Board };
