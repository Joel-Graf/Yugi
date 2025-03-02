import Image from "next/image";
import styles from "./monster.module.css";

export default function Monster() {
  return (
    <div>
      <Image
        src="/monster/brain_slime.png"
        alt="alt"
        width={380}
        height={500}
      />
    </div>
  );
}
