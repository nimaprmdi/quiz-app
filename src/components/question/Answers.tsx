import React, { useState, useContext, useEffect } from "react";
import AnswerItem from "./AnswerItem";
import { QuestionContext } from "../../context/QuestionContext";
import NextQuestion from "../common/NextQuestion";

interface AnswerItems {
  answerIsTrue: boolean;
  answerTitle: string;
  id: string;
}

interface AnswersProps {
  answerData: AnswerItems[];
  questionSlug: string | undefined;
}

const Answers = ({ answerData, questionSlug }: AnswersProps) => {
  const { dispatch } = useContext(QuestionContext);
  const [isSelected, setIsSelected] = useState({ id: "", called: false });

  const handleDispatch = (id: string, time: number) => {
    if (!isSelected.called) setIsSelected({ id: id, called: true });

    dispatch({ type: "ADD_ANSWER", payload: { id, question: questionSlug, time } });
  };

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
                  onHandleDispatch={(id, time) => handleDispatch(id, time)}
                  selectedId={isSelected.id}
                />
              </li>
            ))}
          </ul>
        </div>

        {isSelected.id && <NextQuestion />}
      </div>
    </div>
  );
};

export default Answers;
