import React from "react";
import { useSwiper } from "swiper/react";
import { useNavigate } from "react-router-dom";

const NextQuestion = () => {
  const swiper = useSwiper();
  const navigate = useNavigate();

  const handleSlideChange = () => {
    if (swiper.activeIndex + 1 === swiper.slides.length) {
      return navigate("/score");
    } else {
      return swiper.slideNext();
    }
  };

  return (
    <button className="c-btn mt-8 inline-block relative z-50 linear duration-150" onClick={() => handleSlideChange()}>
      {swiper.activeIndex + 1 === swiper.slides.length ? "See Result" : "Next"}
    </button>
  );
};

export default NextQuestion;
