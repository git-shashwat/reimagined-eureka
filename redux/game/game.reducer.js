import gamescreenTypes from "./game.types";
const INITIAL_STATE = {
  guessedNumber: -1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case gamescreenTypes.SET_GUESSED_NUMBER:
      return {
        ...state,
        guessedNumber: action.payload,
      };

    default:
      return state;
  }
};
