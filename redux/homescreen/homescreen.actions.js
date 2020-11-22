import homescreenTypes from "./homescreen.types";

export const setNumber = (number) => ({
  type: homescreenTypes.SET_NUMBER,
  payload: number,
});

export const setIsConfirmed = () => ({
  type: homescreenTypes.SET_IS_CONFIRMED,
});
