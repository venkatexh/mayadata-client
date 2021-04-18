export const menuItem = (item = "Home", action) => {
  switch (action.type) {
    case "SELECT_MENU_ITEM":
      return action.payload;
    default:
      return item;
  }
};
