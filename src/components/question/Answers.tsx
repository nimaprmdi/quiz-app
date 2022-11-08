import { useState, useContext, useEffect } from "react";
import AnswerItem from "./AnswerItem";
import NextQuestion from "../common/NextQuestion";
import useTimer from "../../hooks/useTimer";
import { useSwiper } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../../context/QuestionContext";
import { TimeContext } from "../../context/TimeContext";
import { useMutation } from "@apollo/client";
import { SEND_TIME, SEND_T } from "../../graphql/mutation";
import { useParams } from "react-router-dom";

interface AnswerItems {
  answerIsTrue: boolean;
  answerTitle: string;
  id: string;
}

interface AnswersProps {
  answerData: AnswerItems[];
  questionSlug: string | undefined;
  displayPopup: boolean;
  name: string;
}

const Answers = ({ answerData, questionSlug, displayPopup, name }: AnswersProps) => {
  const { slug } = useParams();
  const swiper = useSwiper();
  const navigate = useNavigate();
  const { dispatch } = useContext(QuestionContext);
  const [isSelected, setIsSelected] = useState({ id: "", called: false });
  const { dispatch: timeDispatch } = useContext(TimeContext);
  const { time, handleStart, handlePause, isActive, isPaused } = useTimer();

  const [sendTime, { data, error, loading }] = useMutation(SEND_T, {
    variables: {
      timeName: name,
      timeDuration: time,
      timeDate: new Date().toISOString(),
    },
  });

  const handleDispatch = (id: string) => {
    handlePause();

    if (!isSelected.called) setIsSelected({ id: id, called: true });
    dispatch({ type: "ADD_ANSWER", payload: { id, question: questionSlug, time } });
  };

  const handleNextBtn = () => {
    if (swiper.activeIndex + 1 === swiper.slides.length) {
      sendTime();

      if (Object.keys(data)) {
        return navigate("/score");
      }
    } else {
      return swiper.slideNext();
    }
  };

  useEffect(() => {
    if (!displayPopup) {
      handleStart();
    }
  }, [displayPopup]);

  useEffect(() => {
    timeDispatch({ type: "NEW_GLOBAL_TIME", payload: { globalTime: time } });
  }, [swiper.activeIndex, time]);

  useEffect(() => {
    console.log({ data, error, loading });
  }, [data, error, loading]);

  const btnText = swiper.activeIndex + 1 === swiper.slides.length ? "See Result" : "Next";

  return (
    <div className="c-test mt-10 px-4 xl:mt-8 w-full h-4/5 flex justify-center items-center">
      <div className="w-full max-w-[1184px] bg-glassLight backdrop-blur-md rounded-3xl relative z-20 py-8">
        <h2 className="c-test__title text-2xl text-white w-full">Choose An Answer</h2>

        <div className="c-test__cards w-full gap-2 flex justify-between items-center content-center flex-wrap mt-9 max-h-auto 4xl:max-h-72 overflow-auto px-4 ">
          <ul className="w-full flex justify-center gap-14 gap-y-3 flex-wrap">
            {answerData.map((answer, index) => (
              <li key={answer.id}>
                <AnswerItem
                  id={answer.id}
                  index={++index}
                  title={answer.answerTitle}
                  onHandleDispatch={(id) => handleDispatch(id)}
                  selectedId={isSelected.id}
                />
              </li>
            ))}
          </ul>
        </div>

        {isSelected.id && <NextQuestion title={btnText} onNextClick={() => handleNextBtn()} />}
      </div>
    </div>
  );
};

export default Answers;
