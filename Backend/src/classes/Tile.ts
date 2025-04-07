import { Position } from "./Position";
import { Monster } from "./Monster";
import { Wall } from "./Wall";

class Tile {
  position: Position;
  wall?: Wall;
  monster?: Monster;

  constructor(position: Position, wall?: Wall, monster?: Monster) {
    this.position = position;
    this.wall = wall;
    this.monster = monster;
  }
}

export { Tile };
