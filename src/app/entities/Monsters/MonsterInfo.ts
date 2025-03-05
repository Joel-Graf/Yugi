interface MonsterInfoProps {
  code: string;
  name: string;
  stars: number;
  atk: number;
  def: number;
  description: string;
}

class MonsterInfo {
  code: string;
  name: string;
  stars: number;
  atk: number;
  def: number;
  description: string;

  constructor(monsterInfoProps: MonsterInfoProps) {
    this.code = monsterInfoProps.code;
    this.name = monsterInfoProps.name;
    this.stars = monsterInfoProps.stars;
    this.atk = monsterInfoProps.atk;
    this.def = monsterInfoProps.def;
    this.description = monsterInfoProps.description;
  }
}

export { MonsterInfo };
