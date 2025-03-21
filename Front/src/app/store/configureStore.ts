import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";
import { GameReducer } from "./Game/game.reducer";
import { AllAppActions } from "./actionPayloadTypes";

const rootReducer = combineReducers({
  game: GameReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppAction = (
  dispatch: AppDispatch,
  getState: typeof store.getState
) => void;
export type AppReducer<S> = Reducer<S, AllAppActions>;

export default store;
