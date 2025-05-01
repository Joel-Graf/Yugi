import styles from "./mainMenu.module.css";

import { useRouter } from "next/navigation";

export default function MainMenu() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/select-monsters");
  };

  return (
    <div className={styles.menuBackground}>
      <h1 className={styles.menuTitle}>Yu-gi-oh Labyrinth</h1>

      <button className={styles.menuButton} onClick={handleClick}>
        Single Player
      </button>
      <button className={styles.menuButton} onClick={handleClick}>
        Multi Player
      </button>
    </div>
  );
}
