export interface MonsterDTO {
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

export class Monster implements MonsterDTO {
  code: string;
  name: string;
  stars: number;
  atk: number;
  def: number;
  description: string;
  mode?: MonsterMode;
  status?: MonsterStatus;

  constructor(monsterDTO: MonsterDTO) {
    this.code = monsterDTO.code;
    this.name = monsterDTO.name;
    this.stars = monsterDTO.stars;
    this.atk = monsterDTO.atk;
    this.def = monsterDTO.def;
    this.description = monsterDTO.description;
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
