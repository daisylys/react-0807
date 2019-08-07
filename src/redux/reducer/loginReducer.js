import { LOG_IN } from "../actions/actionTypes";

import initState from "../store/initState";

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = initState.token, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    default:
      return state;
  }
};
