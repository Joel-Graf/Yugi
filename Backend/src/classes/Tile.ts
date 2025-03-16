import { Position } from "./Position";
import { Monster } from "./Monster";

class Tile {
  position: Position;
  monster?: Monster;

  constructor(position: Position, monster?: Monster) {
    this.position = position;
    this.monster = monster;
  }
}

export { Tile };
