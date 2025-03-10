import { Monster } from "./Monster";

export interface PlayerInfo {
  id: number;
  monsters: Array<Monster>;
}

class Player implements PlayerInfo {
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
