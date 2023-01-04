import React, { useReducer, createContext } from "react";
import { StateType, ActionType, QustionContextProps } from "../models/QuestionContextModel";

/* This Context Will Find Out Which Answer Is Selcted  */

const initialState: StateType = {
    selectedAnswer: [],
    name: "",
    globalTime: 0,
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

        case "ADD_NAME":
            return {
                ...state,
                name: action.payload.name,
            };

        case "ADD_TIME":
            return {
                ...state,
                globalTime: action.payload.globalTime,
            };

        case "RESET_TEST":
            return {
                selectedAnswer: [],
                name: "",
                globalTime: 0,
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
