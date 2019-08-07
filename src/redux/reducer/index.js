import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
// import secReducer from "./secReducer";
// import videoHomeReducer from "./videoHomeReducer";
// import videoReducer from "./videoReducer";
import loginReducer from "./loginReducer";
const reducer = combineReducers({
  token: loginReducer,
  musicData1:musicReducer,
//   firstData: firstReducer,
//   secData: secReducer,
//   videoHome: videoHomeReducer,
//   videoData: videoReducer
});
// function reducer(state = {}, action) {
//   return {
//     firstReducer: firstReducer(state.a, action),
//     secReducer: secReducer(state.b, action)
//   };
// }
export default reducer;
