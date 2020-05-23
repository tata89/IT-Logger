import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combineReducers from "./Reducers/index";

const initalState = {};
const middleware = [thunk];
const store = createStore(
  combineReducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
