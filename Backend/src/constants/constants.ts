import { MonsterDTO } from "../entities/Monster";

export const POSITION_LIMITS = {
  X_LOWER: 0,
  X_UPPER: 10,
  Y_LOWER: 0,
  Y_UPPER: 14,
};

export const SELECT_MONSTER_MENU_LIMITS = {
  MONSTER_STARS: 20,
  MONSTER_QUANTITY: 7,
};

export const MONSTERS_DTO_DICTIONARY: { [key: string]: MonsterDTO } = {
  blackland_fire_dragon: {
    code: "blackland_fire_dragon",
    name: "Blackland Fire Dragon",
    stars: 4,
    atk: 2200,
    def: 2000,
    description: "Fire Breath",
  },
  blue_eyes_white_dragon: {
    code: "blue_eyes_white_dragon",
    name: "Blue-Eyes White Dragon",
    stars: 6,
    atk: 3000,
    def: 2500,
    description: "BurstStream",
  },
  brain_slime: {
    code: "brain_slime",
    name: "Brain Slime",
    stars: 3,
    atk: 1600,
    def: 1500,
    description: "Can't be attacked by five-star monsters",
  },
  celtic_swordsman: {
    code: "celtic_swordsman",
    name: "Celtic Swordsman",
    stars: 4,
    atk: 2300,
    def: 2000,
    description:
      "Celtic Swordsman's ATK goes up 200 points after each successful attack.",
  },
  curse_of_dragon: {
    code: "curse_of_dragon",
    name: "Curse of Dragon",
    stars: 5,
    atk: 2200,
    def: 1900,
    description: "Hell Flame",
  },
  dark_eye: {
    code: "dark_eye",
    name: "Dark Eye",
    stars: 3,
    atk: 1700,
    def: 300,
    description:
      "When it attacks a five-star monster, that monster can't move for two turns (even if it wins)",
  },
  dark_magician: {
    code: "dark_magician",
    name: "Dark Magician",
    stars: 5,
    atk: 2400,
    def: 2600,
    description: "Black Magic",
  },
  dragon_capture_jar: {
    code: "dragon_capture_jar",
    name: "Dragon Capture Jar",
    stars: 5,
    atk: 1200,
    def: 1400,
    description:
      "If it attacks or is attacked by a dragon, the dragon is removed from the game",
  },
  feral_imp: {
    code: "feral_imp",
    name: "Feral Imp",
    stars: 4,
    atk: 1800,
    def: 1900,
    description: "Attack reaches up to two spaces ahead",
  },
  gaia_the_fierce_knight: {
    code: "gaia_the_fierce_knight",
    name: "Gaia The Fierce Knight",
    stars: 5,
    atk: 2300,
    def: 1800,
    description: "Spiral Saber",
  },
  gate_guardian: {
    code: "gate_guardian",
    name: "Gate Guardian",
    stars: 5,
    atk: 2300,
    def: 2500,
    description: "Attack reaches up to three spaces ahead",
  },
  gimmick: {
    code: "gimmick",
    name: "Gimmick",
    stars: 3,
    atk: 1800,
    def: 2000,
    description: "Can't be attacked by six-star monsters",
  },
  gust: {
    code: "gust",
    name: "Gust",
    stars: 2,
    atk: 1500,
    def: 1200,
    description: "Can't be attacked by four-star monsters",
  },
  hercules_beetle: {
    code: "hercules_beetle",
    name: "Hercules Beetle",
    stars: 4,
    atk: 1900,
    def: 2000,
    description:
      "Hercules Beetle's ATK goes up 200 points after each successful attack.",
  },
  killer_needle: {
    code: "killer_needle",
    name: "Killer Needle",
    stars: 4,
    atk: 1500,
    def: 1600,
    description:
      "After it attacks an enemy, Killer Needle can't move on the next turn",
  },
  kuriboh: {
    code: "kuriboh",
    name: "Kuriboh",
    stars: 2,
    atk: 1500,
    def: 1800,
    description:
      "When it attacks an enemy, the enemy's ATK decreases by 500 points permanently (even if it wins)",
  },
  mystical_elf: {
    code: "mystical_elf",
    name: "Mystical Elf",
    stars: 3,
    atk: 1500,
    def: 1800,
    description:
      "Any card which attacks Mystical Elf can't move on the next turn (even if it wins)",
  },
  red_eyes_black_dragon: {
    code: "red_eyes_black_dragon",
    name: "Red-Eyes Black Dragon",
    stars: 6,
    atk: 2500,
    def: 2000,
    description: "Black Fire Bullet",
  },
  summoned_skull: {
    code: "summoned_skull",
    name: "Summoned Skull",
    stars: 5,
    atk: 2700,
    def: 2000,
    description: "Demon Lightning",
  },
  time_magician: {
    code: "time_magician",
    name: "Time Magician",
    stars: 3,
    atk: 1000,
    def: 500,
    description: "Once per game, Time Magician can warp to any location",
  },
  winged_dragon_guardian_of_the_fortress: {
    code: "winged_dragon_guardian_of_the_fortress",
    name: "Winged Dragon, Guardian of the Fortress",
    stars: 4,
    atk: 2100,
    def: 1500,
    description: "Fire Ball",
  },
};
