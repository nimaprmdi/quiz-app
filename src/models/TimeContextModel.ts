interface TimeStateItems {
  time: number;
  questionSlug: string;
}

interface TimeState {
  questions: TimeStateItems[];
  globalTime: number;
}

interface TimeAction {
  type: string;
  payload: {
    time: number;
    questionSlug: string;
  };
}

interface TimeContextProps {
  children?: JSX.Element | JSX.Element[];
}

export type { TimeState, TimeAction, TimeContextProps };
