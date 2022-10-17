import initialState from "./initialState";
import { COLORCHOICE, STATUS } from "./actionTypes";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHOICE:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: {
              ...state.colors,
              color,
            },
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((extcolor) => extcolor !== color),
          };

        default:
          return state;
      }
    default:
      return state;
  }
};

export default filterReducer;
