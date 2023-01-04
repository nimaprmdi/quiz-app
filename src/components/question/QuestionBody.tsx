import Answers from "./Answers";
import QuestionTitle from "./QuestionTitle";
import { useEffect, useContext, useState } from "react";
import { useSwiper } from "swiper/react";
import { SwiperContext } from "../../context/SwiperContext";

interface QuestionBodyProps {
    questionSlug: string | undefined;
    questionTitle: string;
    answers: [];
    displayPopup: boolean;
    name: string;

    handleStart: () => void;
    handlePause: () => void;
    time: number;
}

const QuestionBody = ({ questionTitle, answers, questionSlug, displayPopup, name, handleStart, handlePause, time }: QuestionBodyProps) => {
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
            <Answers
                answerData={answers}
                questionSlug={questionSlug}
                displayPopup={displayPopup}
                name={name}
                handleStart={handleStart}
                handlePause={handlePause}
                time={time}
            />
        </>
    );
};

export default QuestionBody;
