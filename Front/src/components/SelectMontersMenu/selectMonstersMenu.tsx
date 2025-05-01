import styles from "./selectMonstersMenu.module.css";
import {
  MONSTERS_DTO_DICTIONARY,
  SELECT_MONSTER_MENU_LIMITS,
} from "../../constants/constants";
import { useState } from "react";
import SelectableMonster from "../SelectableMonster/selectableMonster";
import { useRouter } from "next/navigation";
import { createGame } from "../../api/api";

export default function SelectMonstersMenu() {
  const router = useRouter();

  const [selectedMonters, setSelectedMonsters] = useState<MonsterDTO[]>([]);
  const actualStars = selectedMonters.reduce((acumulatedStars, monsterDTO) => {
    return acumulatedStars + monsterDTO.stars;
  }, 0);
  const actualMonsterQuantity = selectedMonters.length;

  const handleClickPlay = async () => {
    const gameId = await createGame({ id: 1, monsters: selectedMonters });
    router.push(`/game?id=${gameId}`);
  };

  return (
    <div className={styles.menuBackground}>
      <h1>{`${actualStars}\\${SELECT_MONSTER_MENU_LIMITS.MONSTER_STARS}`}</h1>
      <div className={styles.menuRow}>
        {Object.values(MONSTERS_DTO_DICTIONARY).map((monsterDTO, i) => {
          const monsterCode = monsterDTO.code;
          const isSelected = selectedMonters.some(
            (selectedMonster) => selectedMonster.code === monsterCode
          );

          return (
            <SelectableMonster
              key={i}
              monster={monsterDTO}
              selected={isSelected}
              onClick={() => {
                if (isSelected) {
                  setSelectedMonsters((state) =>
                    [...state].filter((info) => info.code !== monsterCode)
                  );
                } else {
                  const updatedStars = actualStars + monsterDTO.stars;
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
                  setSelectedMonsters((state) => [...state, monsterDTO]);
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
