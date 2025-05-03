import React from "react";
import styles from "./tile.module.css";

interface TileProps {
  tileState: Tile
}

export default function Tile({ tileState }: TileProps) {
  return <div className={styles.tile}>{JSON.stringify(tileState)}</div>;
}
