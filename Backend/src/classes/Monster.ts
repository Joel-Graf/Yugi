export class Monster {
  code: string;
  name: string;
  stars: number;
  atk: number;
  def: number;
  description: string;
  mode?: MonsterMode;
  status?: MonsterStatus;

  constructor(
    code: string,
    name: string,
    stars: number,
    atk: number,
    def: number,
    description: string,
    mode?: MonsterMode,
    status?: MonsterStatus
  ) {
    this.code = code;
    this.name = name;
    this.stars = stars;
    this.atk = atk;
    this.def = def;
    this.description = description;
    this.mode = mode;
    this.status = status;
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
