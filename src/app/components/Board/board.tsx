import styles from "./board.module.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/configureStore";
import { increment, decrement } from "../../store/Game/game.actions";
import Tile from "../Tile/tile";
import { POSITION_LIMITS } from "@/app/constants";

export default function Board() {
  const gameState = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch<AppDispatch>();

  function renderBoard() {
    const tilesEntities = gameState.board.getTiles();
    const tilesComponents = [];

    for (let y = 0; y <= POSITION_LIMITS.Y_UPPER; y++) {
      for (let x = 0; x <= POSITION_LIMITS.X_UPPER; x++) {

      }
    }


    return (
      // <div className={styles.column}>
      <Tile key={i} t={i}></Tile>
      // </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* <h1>Score: {score}</h1> */}
      {/* <button onClick={() => dispatch(increment())}>Increment</button> */}

      {renderBoard()}
    </div>
  );
}
