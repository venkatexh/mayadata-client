import { actionTypes } from "../actions/actionTypes";

export const navbarStatus = (status = false, action) => {
  switch (action.type) {
    case actionTypes.NAVBAR_COLLAPSED:
      return action.payload;
    default:
      return status;
  }
};
