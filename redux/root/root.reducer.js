import { combineReducers } from "redux";
import homeReducer from "../homescreen/homescreen.reducer";

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
