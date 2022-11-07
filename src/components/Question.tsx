import { useState, useEffect } from "react";
import PopUp from "./common/PopUp";
import QuestionHeader from "./question/QuestionHeader";
import QuestionBody from "./question/QuestionBody";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_QUESTIONS } from "../graphql/query";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import NextQuestion from "./common/NextQuestion";

interface QuestionsSingle {
  id: string;
  questionSlug: string;
  questionTitle: string;
  answers: [];
}

const Question = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_QUESTIONS, {
    fetchPolicy: "network-only",
    variables: {
      slug,
    },
  });

  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading</p>;

  return (
    <section className="c-question w-full h-primary bg-primary flex justify-center items-start">
      {/* <PopUp /> */}

      <div className="w-full max-w-[1184px] mt-9 flex justify-center flex-wrap">
        <QuestionHeader />

        <div className="w-full relative z-40">
          <Swiper init allowTouchMove={false}>
            {data.questions.map((question: QuestionsSingle, index: number) => (
              <SwiperSlide key={index}>
                <QuestionBody
                  questionTitle={question.questionTitle}
                  answers={question.answers}
                  questionSlug={question.questionSlug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
