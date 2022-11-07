import React from "react";

interface NextQuestionProps {
  onNextClick: () => void;
  title: string;
}

const NextQuestion = ({ title, onNextClick }: NextQuestionProps) => {
  return (
    <button className="c-btn mt-8 inline-block relative z-50 linear duration-150" onClick={() => onNextClick()}>
      {title}
    </button>
  );
};

export default NextQuestion;
