import styles from "./board.module.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/configureStore";
import { increment, decrement } from "../../store/Game/game.actions";

export default function Board() {
  const gameState = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="container">
      {/* <h1>Score: {score}</h1> */}
      {/* <button onClick={() => dispatch(increment())}>Increment</button> */}
      {gameState.board.getTiles().map((tile) => {
        // TODO: Render the board
        return <></>
      })}
    </div>
  );
}
