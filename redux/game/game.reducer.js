import gamescreenTypes from "./game.types";
const INITIAL_STATE = {
  guessedNumber: -1,
  guessCount: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case gamescreenTypes.SET_GUESSED_NUMBER:
      return {
        ...state,
        guessedNumber: action.payload,
      };

    case gamescreenTypes.SET_GUESS_COUNTS:
      return {
        ...state,
        guessCount: action.payload,
      };

    default:
      return state;
  }
};
