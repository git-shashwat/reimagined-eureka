import gamescreenTypes from "./game.types";

export const setGuessedNumber = (number) => ({
  type: gamescreenTypes.SET_GUESSED_NUMBER,
  payload: Number(number),
});

export const setGuessCount = (count) => ({
  type: gamescreenTypes.SET_GUESS_COUNTS,
  payload: count,
});
