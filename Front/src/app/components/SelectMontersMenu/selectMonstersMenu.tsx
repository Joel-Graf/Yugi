import styles from "./selectMonstersMenu.module.css";
import {
  MONSTERS_INFO,
  SELECT_MONSTER_MENU_LIMITS,
} from "@/app/constants/constants";
import { useState } from "react";
import SelectableMonster from "../SelectableMonster/selectableMonster";
import { MonsterInfo } from "@/app/entities/Monsters/MonsterInfo";
import { useRouter } from "next/navigation";
import { startGame } from "@/app/store/Game/game.actions";
import { useDispatch } from "react-redux";

export default function SelectMonstersMenu() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [selectedMonters, setSelectedMonsters] = useState<MonsterInfo[]>([]);
  const actualStars = selectedMonters.reduce((acumulatedStars, monsterInfo) => {
    return acumulatedStars + monsterInfo.stars;
  }, 0);
  const actualMonsterQuantity = selectedMonters.length;

  const handleClickPlay = () => {
    dispatch(startGame({ monstersInfo: selectedMonters }));
    router.push("/game");
  };

  return (
    <div className={styles.menuBackground}>
      <h1>{`${actualStars}\\${SELECT_MONSTER_MENU_LIMITS.MONSTER_STARS}`}</h1>
      <div className={styles.menuRow}>
        {Object.values(MONSTERS_INFO).map((monsterInfo, i) => {
          const monsterCode = monsterInfo.code;
          const isSelected = selectedMonters.some(
            (selectedMonster) => selectedMonster.code === monsterCode
          );

          return (
            <SelectableMonster
              key={i}
              monster={monsterInfo}
              selected={isSelected}
              onClick={() => {
                if (isSelected) {
                  setSelectedMonsters((state) =>
                    [...state].filter((info) => info.code !== monsterCode)
                  );
                } else {
                  const updatedStars = actualStars + monsterInfo.stars;
                  if (updatedStars > SELECT_MONSTER_MENU_LIMITS.MONSTER_STARS) {
                    return alert("Você não pode ter mais de 20 estrelas");
                  }
                  const updatedMonsterQuantity = actualMonsterQuantity + 1;
                  if (
                    updatedMonsterQuantity >
                    SELECT_MONSTER_MENU_LIMITS.MONSTER_QUANTITY
                  ) {
                    return alert("Você não pode ter mais de 7 monstros");
                  }
                  setSelectedMonsters((state) => [...state, monsterInfo]);
                }
              }}
            />
          );
        })}
      </div>
      <button onClick={handleClickPlay}>Jogar</button>
    </div>
  );
}
