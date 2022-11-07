import { useEffect, useContext, useState } from "react";
import Answers from "./Answers";
import QuestionTitle from "./QuestionTitle";
import { useSwiper } from "swiper/react";
import { SwiperContext } from "../../context/SwiperContext";

interface QuestionBodyProps {
  questionSlug: string | undefined;
  questionTitle: string;
  answers: [];
}

const QuestionBody = ({ questionTitle, answers, questionSlug }: QuestionBodyProps) => {
  const swiper = useSwiper();
  const { state, dispatch } = useContext(SwiperContext);
  const [activeIndex, setActiveIndex] = useState(0);

  swiper.on("afterInit", () => {
    dispatch({ type: "GET_ALL_INDEX", payload: { totalIndex: swiper.slides.length } });
  });

  useEffect(() => {
    if (swiper) {
      swiper.activeIndex === undefined ? setActiveIndex(0) : setActiveIndex(swiper.activeIndex);
      dispatch({ type: "SELECT_INDEX", payload: { index: activeIndex + 1 } });
    }
  }, []);

  useEffect(() => {
    swiper.on("slideChange", () => {
      dispatch({ type: "SELECT_INDEX", payload: { index: swiper.activeIndex + 1 } });
    });
  }, [swiper]);

  return (
    <>
      <QuestionTitle title={questionTitle} />
      <Answers answerData={answers} questionSlug={questionSlug} />
    </>
  );
};

export default QuestionBody;
