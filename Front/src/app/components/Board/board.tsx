import styles from "./board.module.css";

export default function Board() {
  function renderBoard() {
    // const tilesEntities = gameState.board.getTiles();

    // const rows = [];
    // for (let y = 0; y <= POSITION_LIMITS.Y_UPPER; y++) {
    //   const tilesOfRow = [];

    //   for (let x = 0; x <= POSITION_LIMITS.X_UPPER; x++) {
    //     tilesOfRow.push(
    //       <Tile key={`tile:(${x}, ${y})`} t={`(${x}, ${y})`}></Tile>
    //     );
    //   }

    //   rows.push(
    //     <div key={`row:${y}`} className={styles.row}>
    //       {tilesOfRow}
    //     </div>
    //   );
    // }

    // return <div className={styles.column}>{rows}</div>;
    return <div>board</div>
  }

  return <div className={styles.container}>{renderBoard()}</div>;
}
