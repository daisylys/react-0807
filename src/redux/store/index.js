import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer/index";
import thunk from "redux-thunk";
import logger from 'redux-logger'
// import firstReducer from "../reducer/firstReducer";
let store = createStore(reducer, applyMiddleware(logger,thunk));
console.log("store", store.getState());
export default store;
