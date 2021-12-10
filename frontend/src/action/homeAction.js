import {
  USER_LOGGEDIN_REQUEST,
  USER_LOGGEDIN_SUCCESS,
  USER_LOGGEDIN_FAIL,
} from "../constant/homeConstant";
import axios from "axios";

export const loggedin = (token) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGGEDIN_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    //
    const data = await axios.get("/thot/profile/", config);

    dispatch({
      type: USER_LOGGEDIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGGEDIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.responseerror.response.data.message
          : error.response,
    });
  }
};
