export interface MonsterInfo {
  code: string;
  name: string;
  stars: number;
  atk: number;
  def: number;
  description: string;
  mode?: MonsterMode;
  status?: MonsterStatus;
}

export type MonsterMode = "ATK" | "DEF";

export type MonsterStatus = "ALIVE" | "DESTROYED";

class Monster implements MonsterInfo {
  code: string;
  name: string;
  stars: number;
  atk: number;
  def: number;
  description: string;
  mode?: MonsterMode;
  status?: MonsterStatus;

  constructor(monsterInfo: MonsterInfo) {
    this.code = monsterInfo.code;
    this.name = monsterInfo.name;
    this.stars = monsterInfo.stars;
    this.atk = monsterInfo.atk;
    this.def = monsterInfo.def;
    this.description = monsterInfo.description;
    this.mode = "ATK";
    this.status = "ALIVE";
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

  setMode(mode: MonsterMode) {
    this.mode = mode;
    console.log(`Setting mode to ${mode}`);
  }
}

export { Monster };
