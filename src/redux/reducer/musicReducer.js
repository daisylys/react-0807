import { ADD_MUSICLIST,DEL_MUSICLIST } from "../actions/actionTypes";

import initState from "../store/initState";

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = initState.MusicList, action) => {
    switch (action.type) {
        case ADD_MUSICLIST:
            return [...state,action.payload];
            case DEL_MUSICLIST:
            return state.filter(v => v.id !== action.payload);
        default: return state;
    }
};