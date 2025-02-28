import React from "react";
import styles from "./tile.module.css";

interface TileProps {
  t: number;
}

export default function Tile({ t }: TileProps) {
  return (
    <div className={styles.tile}>
      {t + "aaa"}
    </div>
  );
}
