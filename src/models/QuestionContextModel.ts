interface StateTypeItems {
  id: string;
  question: string;
  time: number;
}

interface StateType {
  selectedAnswer: StateTypeItems[];
}

interface ActionType {
  type: string;
  payload: {
    id: string;
    question: string;
    time: number;
  };
}

interface QustionContextProps {
  children?: JSX.Element | JSX.Element[];
}

export type { StateType, ActionType, QustionContextProps };
