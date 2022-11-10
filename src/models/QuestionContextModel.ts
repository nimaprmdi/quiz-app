interface StateTypeItems {
  isTrue: boolean;
  id: string;
  question: string;
  time: number;
}

interface StateType {
  selectedAnswer: StateTypeItems[];
  name: string;
  globalTime: number;
}

interface ActionType {
  type: string;
  payload: {
    id: string;
    question: string;
    time: number;
    name: string;
    globalTime: number;
    isTrue: boolean;
  };
}

interface QustionContextProps {
  children?: JSX.Element | JSX.Element[];
}

export type { StateType, ActionType, QustionContextProps };
