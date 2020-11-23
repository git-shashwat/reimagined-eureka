import { combineReducers } from "redux";
import homeReducer from "../homescreen/homescreen.reducer";
import gameReducer from "../game/game.reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  game: gameReducer,
});

export default rootReducer;
