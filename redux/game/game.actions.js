import gamescreenTypes from "./game.types";

export const setGuessedNumber = (number) => ({
  type: gamescreenTypes.SET_GUESSED_NUMBER,
  payload: Number(number),
});
