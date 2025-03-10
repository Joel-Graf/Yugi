import { Monster } from "./Monster";

export interface PlayerDTO {
  id: number;
  monsters: Array<Monster>;
}

class Player implements PlayerDTO {
  id: number;
  monsters: Array<Monster>;

  constructor(id: number) {
    this.id = id;
    this.monsters = [];
  }

  isPlayerAlive() {}
  isPlayerTurn() {}
}

export { Player };
