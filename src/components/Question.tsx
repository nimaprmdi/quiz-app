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
import CategoryIcon from "./common/CategoryIcon";

interface QuestionsSingle {
  id: string;
  questionSlug: string;
  questionTitle: string;
  answers: [];
}

const Question = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_QUESTIONS, {
    variables: { slug },
  });
  const [name, setname] = useState("");
  const [displayPopup, setDisplayPopup] = useState(true);
  const { dispatch } = useContext(QuestionContext);

  const handlePopup = (inputName: string) => {
    dispatch({ type: "RESET_TEST" });

    if (inputName) {
      const userName = inputName.toLowerCase();
      setDisplayPopup(false);
      setname(userName);
      dispatch({ type: "ADD_NAME", payload: { name: userName } });
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
          description="Your test will start when you click on the next button and your time will get calculated !"
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

      <CategoryIcon />
    </section>
  );
};

export default Question;
