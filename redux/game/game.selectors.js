import { createSelector } from "reselect";

const selectGame = (state) => state.game;

export const selectGuessedNumber = createSelector(
  [selectGame],
  (game) => game.guessedNumber
);
