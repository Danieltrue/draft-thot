import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//
import { userRegisterReducer } from "./reducer/userReducer";
const reducer = combineReducers({
  userRegister: userRegisterReducer,
});

const intialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
