type Mode = "ATK" | "DEF";
type Status = "ALIVE" | "DESTROYED";

class Monster {
  code: string;
  name: string;
  atk: number;
  def: number;
  mode?: Mode;
  status?: Status;

  constructor(
    name: string,
    code: string,
    atk: number,
    def: number,
    mode?: Mode
  ) {
    this.name = name;
    this.code = code;
    // this.src = src;
    this.atk = atk;
    this.def = def;
    this.mode = mode;
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

  setMode() {
    console.log("Setting mode");
  }
}

export { Monster };
