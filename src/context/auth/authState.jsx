import React, { useReducer } from "react";
import { LOGIN_ERROR, LOGIN_SUCCES } from "../../types";
import clientAxios from "../../config/axios";
import authContext from "./authContext";
import authReducer from "./authReducer";


const AuthState = ({ children }) => {
  const initialState = {
    token: "",
    authenticated: null,
    user: null,
    message: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logIn = async (data) => {
    try {
      const result = await clientAxios.post("/users/login", data);
      dispatch({
        type: LOGIN_SUCCES,
        payload: result.data.message,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data,
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        logIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
