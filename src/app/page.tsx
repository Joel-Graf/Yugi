"use client";

import Board from "./components/Board/board";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}
