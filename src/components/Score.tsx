import CategoryIcon from "./common/CategoryIcon";
import { useContext, useState, useEffect } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { useMutation } from "@apollo/client";
import { SEND_T } from "../graphql/mutation";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Score = () => {
  const {
    state: { globalTime, name, selectedAnswer },
    dispatch,
  } = useContext(QuestionContext);

  const navigate = useNavigate();
  const { slug } = useParams();

  const [scoreData, setScoreData] = useState({
    totalQuestion: selectedAnswer.length,
    trueAnswers: selectedAnswer.filter((answer) => answer.isTrue).length,
    scorePercent: (selectedAnswer.filter((answer) => answer.isTrue).length / selectedAnswer.length) * 100,
    timeSpent: globalTime,
  });

  const [sendTime, { data, error, loading }] = useMutation(SEND_T, {
    variables: {
      timeName: name,
      timeDuration: globalTime,
      timeDate: new Date().toISOString(),
      timeTotalQuestions: selectedAnswer.length,
      timeCorrectAnswers: selectedAnswer.filter((answer) => answer.isTrue).length,
      categorySlug: slug,
    },
  });

  const handleTestAgain = () => {
    dispatch({ type: "RESET_TEST" });
    navigate(`/question/${slug}`);
  };

  useEffect(() => {
    if (loading) {
      toast.info("Connecting to server", {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
      });
    } else if (data) {
      toast.success("Data Saved !", {
        position: "top-right",
        autoClose: 5000,
      });

      navigate("/");
    }
  }, [loading, error, data]);

  return (
    <div className="c-score //GLOB w-full min-h-primary //BG bg-primary //DISP flex justify-center items-center content-center">
      <div className="overflow-auto px-8 pb-16 md:pb-16 lg:px-0 w-full lg:w-10/12 h-primary md:h-4/5 relative z-20 bg-glassLight lg:rounded-3xl max-w-[1184px] backdrop-blur-md flex justify-center items-center flex-wrap content-start gap-[2px] animate-fade-in duration-300">
        <div className="mt-8">
          <h1 className="w-full text-white text-4xl">
            {scoreData.scorePercent >= 50 ? `Congrats ${name} 🎉` : `You Failed ${name} 💔`}
          </h1>

          <div className="flex mt-16 gap-14 flex-wrap">
            <div className="c100 p0 center">
              <span>{selectedAnswer.length}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
              <p className="w-max max-w-[150px] text-white capitalize text-base top-[120%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
                Total questions
              </p>
            </div>

            <div className={`c100 p${scoreData.scorePercent} center`}>
              <span>{scoreData.scorePercent}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
              <p className="w-max max-w-[150px] text-white capitalize text-base top-[120%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
                Correct answers
              </p>
            </div>

            <div className="c100 p0 center">
              <span>
                {("0" + Math.floor((scoreData.timeSpent / 60000) % 60)).slice(-2)}:
                {("0" + Math.floor((scoreData.timeSpent / 1000) % 60)).slice(-2)}s
              </span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
              <p className="w-max max-w-[150px] text-white capitalize text-base top-[120%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
                Time spent
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-24 flex gap-4 justify-center flex-wrap">
          <button onClick={() => handleTestAgain()} className="c-btn c-btn--ghost capitalize">
            test again
          </button>

          <button onClick={() => sendTime()} className="c-btn capitalize">
            save result
          </button>

          <button onClick={() => navigate("/")} className="c-btn c-btn--ghost capitalize">
            back to home
          </button>
        </div>
      </div>

      <CategoryIcon />
    </div>
  );
};

export default Score;
