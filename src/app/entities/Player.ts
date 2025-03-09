import { Monster } from "./Monster";

class Player {
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
