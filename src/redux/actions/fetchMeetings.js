import Axios from "axios";
import { hostHeader } from "../../config/hostHeader";
import { actionTypes } from "./actionTypes";

export const fetchMeetings = () => async (dispatch) => {
  Axios.get(`${hostHeader.url}/api/meeting`)
    .then((res) => {
      dispatch({ type: actionTypes.ALL_MEETINGS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: actionTypes.ALL_MEETINGS, payload: [] });
    });
};
