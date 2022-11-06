interface StateTypeItems {
  id: string;
  question: string;
}

interface StateType {
  selectedAnswer: StateTypeItems[];
}

interface ActionType {
  type: string;
  payload: {
    id: string;
    question: string;
  };
}

interface QustionContextProps {
  children?: JSX.Element | JSX.Element[];
}

export type { StateType, ActionType, QustionContextProps };
