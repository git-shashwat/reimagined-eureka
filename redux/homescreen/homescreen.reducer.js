import homescreenTypes from "./homescreen.types";
const INITIAL_STATE = {
  number: "0",
  isConfirmed: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case homescreenTypes.SET_NUMBER:
      return {
        ...state,
        number: action.payload,
      };

    case homescreenTypes.SET_IS_CONFIRMED:
      return {
        ...state,
        isConfirmed: !state.isConfirmed,
      };

    default:
      return state;
  }
};
