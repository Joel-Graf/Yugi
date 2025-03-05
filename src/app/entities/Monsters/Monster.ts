import { MonsterInfo } from "./MonsterInfo";

type Mode = "ATK" | "DEF";
type Status = "ALIVE" | "DESTROYED";

class Monster extends MonsterInfo {
  mode?: Mode;
  status?: Status;

  constructor(monsterInfo: MonsterInfo) {
    super(monsterInfo);
  }

  move() {
    console.log("The monster moves.");
  }

  attack() {
    if (this.mode === "ATK") {
      console.log(`The monster attacks with ${this.atk} power!`);
    } else {
      console.log("The monster is in defense mode and cannot attack.");
    }
  }

  setMode() {
    console.log("Setting mode");
  }
}

export { Monster };
