import React, { useReducer, createContext, FC } from "react";
import { StateType, ActionType, QustionContextProps } from "../models/QuestionContext";

/** This Context Will Find Out Which Answer Is selcted  */

const initialState: StateType = {
  selectedAnswer: [],
};

export const QuestionContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const questionReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_ANSWER":
      if (
        !state.selectedAnswer.find((item) => item.question === action.payload.question)
      ) {
        return {
          ...state,
          selectedAnswer: [...state.selectedAnswer, action.payload],
        };
      }
      return state;
    default:
      return state;
  }
};

const QuestionProvider = ({ children }: QustionContextProps) => {
  const [state, dispatch] = useReducer(questionReducer, initialState);

  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
