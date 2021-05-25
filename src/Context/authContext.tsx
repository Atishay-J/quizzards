import { createContext, useContext, useReducer, useState } from "react";

export const AuthContext = createContext<any | null>(null);

const initState: any = {
  isUserLoggedIn: localStorage.getItem("isUserLoggedIn") ? true : false,
};

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isUserLoggedIn", "true");
      localStorage.setItem("userName", action.payload.userName);
      return { ...state, isUserLoggedIn: true };

    case "LOGOUT":
      localStorage.removeItem("isUserLoggedIn");
      return { ...state, isUserLoggedIn: false };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }: any) => {
  const [authState, authDispatch] = useReducer(authReducer, initState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth: any = () => {
  return useContext(AuthContext);
};
