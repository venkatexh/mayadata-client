import { actionTypes } from "./actionTypes";

export const setNavbarCollapsed = (value) => {
  return { type: actionTypes.NAVBAR_COLLAPSED, payload: !value };
};
