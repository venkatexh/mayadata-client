import { hostHeader } from "../../config/hostHeader";
import Axios from "axios";
import { actionTypes } from "./actionTypes";

export const addMeeting = (meeting, prevList) => async (dispatch) => {
  Axios.post(`${hostHeader.url}/api/meeting`, meeting)
    .then((res) => {
      dispatch({
        type: actionTypes.ALL_MEETINGS,
        payload: [...prevList, res.data],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
