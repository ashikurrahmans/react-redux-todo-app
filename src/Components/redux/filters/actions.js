import { COLORCHOICE, STATUS } from "./actionTypes";

export const incomplete = (color, changeType) => {
  return {
    type: COLORCHOICE,
    payload: {
      color,
      changeType,
    },
  };
};

export const status = () => {
  return {
    type: STATUS,
    payload: {
      status,
    },
  };
};
