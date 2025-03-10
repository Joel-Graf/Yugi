import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gameReducer from './Game/game.reducer';

const rootReducer = combineReducers({
  game: gameReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
