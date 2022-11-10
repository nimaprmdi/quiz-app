import LoadingComponent from "./common/LoadingComponent";
import QuestionHeader from "./question/QuestionHeader";
import QuestionBody from "./question/QuestionBody";
import PopUp from "./common/PopUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { GET_QUESTIONS } from "../graphql/query";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import "swiper/swiper-bundle.css";

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
  const [displayPopup, setDisplayPopup] = useState(true);
  const [name, setname] = useState("");
  const { dispatch } = useContext(QuestionContext);

  const handlePopup = (name: string) => {
    dispatch({ type: "RESET_TEST" });

    if (name) {
      setDisplayPopup(false);
      setname(name);
      dispatch({ type: "ADD_NAME", payload: { name } });
    } else {
      toast.error("Enter Your Name", {
        position: "top-center",
      });
    }
  };

  if (loading) return <LoadingComponent />;
  if (error) return <LoadingComponent hasError={error.message} />;

  return (
    <section className="c-question w-full min-h-screen bg-primary flex justify-center items-start">
      {displayPopup && (
        <PopUp
          title="Welcome To This Test"
          description="Your test will start when ypu click on the Next button and your time will get calculated!"
          handlePopClick={(e) => handlePopup(e)}
        />
      )}

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
                  displayPopup={displayPopup}
                  name={name}
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
