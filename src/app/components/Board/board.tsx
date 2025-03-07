import styles from "./board.module.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/configureStore";
import { increment, decrement } from "../../store/Game/game.actions";
import Tile from "../Tile/tile";
import { POSITION_LIMITS } from "@/app/constants/constants";

export default function Board() {
  const gameState = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch<AppDispatch>();

  function renderBoard() {
    const tilesEntities = gameState.board.getTiles();

    const rows = [];
    for (let y = 0; y <= POSITION_LIMITS.Y_UPPER; y++) {
      const tilesOfRow = [];

      for (let x = 0; x <= POSITION_LIMITS.X_UPPER; x++) {
        tilesOfRow.push(<Tile t={`(${x}, ${y})`}></Tile>);
      }

      rows.push(<div className={styles.row}>{tilesOfRow}</div>);
    }

    return <div className={styles.column}>{rows}</div>;
  }

  return <div className={styles.container}>{renderBoard()}</div>;
}
