import React, { useReducer, createContext, FC } from "react";
import { StateType, ActionType, QustionContextProps } from "../models/QuestionContextModel";

/** This Context Will Find Out Which Answer Is selcted  */

const initialState: StateType = {
  selectedAnswer: [],
};

const questionReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_ANSWER":
      if (!state.selectedAnswer.find((item) => item.question === action.payload.question)) {
        return {
          ...state,
          selectedAnswer: [...state.selectedAnswer, action.payload],
        };
      }
      return state;
    case "START_TIMER":
      return {
        ...state,
        selectedAnswer: [...state.selectedAnswer, action.payload],
      };
    default:
      return state;
  }
};

export const QuestionContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const QuestionProvider = ({ children }: QustionContextProps) => {
  const [state, dispatch] = useReducer(questionReducer, initialState);

  return <QuestionContext.Provider value={{ state, dispatch }}>{children}</QuestionContext.Provider>;
};

export default QuestionProvider;
