import Image from "next/image";
import styles from "./monster.module.css";
import { MONSTERS } from "@/app/constants";

export default function SelectMonstersMenu() {
  return (
    <div>
      {Object.values(MONSTERS).map((monster) => {
        return (
          <Image
            key={monster.code}
            src={`/monster/${monster.code}.png`}
            alt="alt"
            width={380}
            height={500}
          />
        );
      })}
    </div>
  );
}
