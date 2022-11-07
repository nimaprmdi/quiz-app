import React, { createContext, useReducer } from "react";
import { SwiperAction, SwiperProps } from "../models/SwiperContextModel";

const initialState: { index: number; totalIndex: number } = {
  index: 0,
  totalIndex: 0,
};

const swiperReducer = (state: { index: number; totalIndex: number }, action: SwiperAction) => {
  switch (action.type) {
    case "SELECT_INDEX":
      const x = { ...state, ...action.payload };
      return x;

    case "GET_ALL_INDEX":
      const y = { ...state, ...action.payload };
      return y;

    default:
      return state;
  }
};

export const SwiperContext = createContext<{
  state: { index: number; totalIndex: number };
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const SwiperProvider = ({ children }: SwiperProps) => {
  const [state, dispatch] = useReducer(swiperReducer, initialState);

  return <SwiperContext.Provider value={{ state, dispatch }}>{children}</SwiperContext.Provider>;
};

export default SwiperProvider;
