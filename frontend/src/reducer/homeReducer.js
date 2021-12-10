import {
  USER_LOGGEDIN_SUCCESS,
  USER_LOGGEDIN_FAIL,
  USER_LOGGEDIN_REQUEST,
} from "../constant/homeConstant";

export const userLoggedInReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGGEDIN_REQUEST:
      return { loading: true };
    case USER_LOGGEDIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGGEDIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
