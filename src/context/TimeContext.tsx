import React, { createContext, useReducer } from "react";
import { TimeState, TimeAction, TimeContextProps } from "../models/TimeContextModel";

const initialState = {
  questions: [],
  globalTime: 0,
};

export const TimeContext = createContext<{
  state: TimeState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const timeReducer = (state: TimeState, action: TimeAction) => {
  switch (action.type) {
    // @todo: Calculate Each question time
    case "NEW_QUESTION_TIME":
      return { ...state, ...action.payload };

    case "NEW_GLOBAL_TIME":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const TimeProvider = ({ children }: TimeContextProps) => {
  const [state, dispatch] = useReducer(timeReducer, initialState);

  return <TimeContext.Provider value={{ state, dispatch }}>{children}</TimeContext.Provider>;
};

export default TimeProvider;
