import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constant/userConstant";

export const register =
  (username, email, role, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      //Create header for request
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      //make and axios request
      const data = await axios.post(
        "/thot/register/",
        {
          username,
          email,
          role,
          password,
        },
        config
      );

      //When the request is successful
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.responseerror.response.data.message
            : error.response,
      });
    }
  };
