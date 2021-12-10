import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//
import { userRegisterReducer, userLoginReducer } from "./reducer/userReducer";
import { userLoggedInReducer } from "./reducer/homeReducer";
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userLoggedIn: userLoggedInReducer,
});

//save the data to the locastorage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const intialState = { user: { userInfo: userInfoFromStorage } };
const middleware = [thunk];
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
