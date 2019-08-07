import { LOG_IN } from "./actionTypes";

export const changeActive = token => {
  return {
    type: LOG_IN,
    payload: token
  };
};
