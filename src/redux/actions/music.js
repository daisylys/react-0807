import { ADD_MUSICLIST, DEL_MUSICLIST } from "./actionTypes";
const addMusicList = data => {
  return {
    type: ADD_MUSICLIST,
    payload: data
  };
};
const delMusicList = id => {
  return {
    type: DEL_MUSICLIST,
    payload: id
  };
};
export { addMusicList, delMusicList };
