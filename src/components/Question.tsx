import React from "react";
import PopUp from "./common/PopUp";
import Answers from "./question/Answers";
import QuestionHeader from "./question/QuestionHeader";
import QuestionTitle from "./question/QuestionTitle";

const Question = () => {
  return (
    <section className="c-question w-full h-primary bg-primary flex justify-center items-start">
      <PopUp />

      <div className="w-full max-w-[1184px] mt-9 flex justify-center flex-wrap">
        <QuestionHeader />
        <QuestionTitle />
        <Answers />
      </div>

      <div className="overflow-hidden h-full w-full absolute z-10 bottom-0 right-0">
        <span className="absolute bottom-[-50px] lg:bottom-[-120px] right-[10px] lg:right-[7%] text-57.5 lg:text-112.5 z-10 font-bold text-white">
          JS
        </span>
      </div>
    </section>
  );
};

export default Question;
