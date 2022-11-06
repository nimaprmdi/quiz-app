import React from "react";
import { useSwiper } from "swiper/react";

const NextQuestion = () => {
  const swiper = useSwiper();

  return (
    <button
      className="c-btn mt-8 inline-block relative z-50"
      onClick={() => swiper.slideNext()}
    >
      Next
    </button>
  );
};

export default NextQuestion;
