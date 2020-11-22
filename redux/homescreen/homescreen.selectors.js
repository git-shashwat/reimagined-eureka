import { createSelector } from "reselect";

const selectHome = (state) => state.home;

export const selectNumber = createSelector([selectHome], (home) => home.number);

export const selectIsConfirmed = createSelector(
  [selectHome],
  (home) => home.isConfirmed
);
