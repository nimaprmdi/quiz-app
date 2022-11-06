import React from "react";
import Answers from "./Answers";
import QuestionTitle from "./QuestionTitle";

interface QuestionBodyProps {
  slug: string | undefined;
  questionTitle: string;
  answers: [];
}

const QuestionBody = ({ questionTitle, answers, slug }: QuestionBodyProps) => {
  return (
    <>
      <QuestionTitle title={questionTitle} />
      <Answers answerData={answers} questionSlug={slug} />
    </>
  );
};

export default QuestionBody;
