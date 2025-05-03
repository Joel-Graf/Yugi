import { POSITION_LIMITS } from "../../../constants/constants";
import styles from "./board.module.css";
import Tile from "../Tile/tile";

export default function Board(props: { boardTiles: BoardTiles }) {
  function renderBoard(boardTiles: BoardTiles) {
    if (!boardTiles) return;

    const rows = [];
    for (let y = 0; y <= POSITION_LIMITS.Y_UPPER; y++) {
      const tilesOfRow = [];

      for (let x = 0; x <= POSITION_LIMITS.X_UPPER; x++) {
        tilesOfRow.push(
          <Tile key={`(${x}, ${y})`} tileState={boardTiles[x][y]}></Tile>
        );
      }

      rows.push(
        <div key={`row:${y}`} className={styles.row}>
          {tilesOfRow}
        </div>
      );
    }

    return <div className={styles.column}>{rows}</div>;
  }

  return <div className={styles.container}>{renderBoard(props.boardTiles)}</div>;
}
