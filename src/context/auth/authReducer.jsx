import { LOGIN_ERROR, LOGIN_SUCCES } from "../../types";
export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCES:
      return {
        ...state,
        authenticated: true,
        message: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
