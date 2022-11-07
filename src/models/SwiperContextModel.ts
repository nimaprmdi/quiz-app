interface SwiperAction {
  type: string;
  payload: {
    index?: number;
    totalIndex?: number;
  };
}

interface SwiperProps {
  children?: JSX.Element | JSX.Element[];
}

export type { SwiperAction, SwiperProps };
