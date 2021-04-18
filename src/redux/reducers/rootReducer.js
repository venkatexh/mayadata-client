import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { meetingList } from "./meetingList";
import { navbarStatus } from "./navbarStatus";
import { persistReducer } from "redux-persist";

const { menuItem } = require("./menuItem");

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["menuItem, navbarStatus"],
};
const rootReducer = combineReducers({
  menuItem,
  navbarStatus,
  meetingList,
});

export default persistReducer(persistConfig, rootReducer);
