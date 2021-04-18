import { actionTypes } from "./actionTypes";

export const selectMenuItem = (value) => {
  return { type: actionTypes.SELECT_MENU_ITEM, payload: value };
};
