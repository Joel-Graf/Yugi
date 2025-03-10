import Image from "next/image";
import styles from "./selectableMonster.module.css";

interface SelectableMonsterProps {
  // monster: MonsterDTO;
  onClick: VoidFunction;
  selected: boolean;
}

export default function SelectableMonster({
  // monster,
  onClick,
  selected = false,
}: SelectableMonsterProps) {
  return (
    <div
      className={
        selected ? styles.selectableMonsterSelected : styles.selectableMonster
      }
      onClick={onClick}
    >
      <Image
        // key={monster.code}
        // src={`/monster/${monster.code}.png`}
        alt="alt"
        width={190}
        height={250}
      />
    </div>
  );
}
