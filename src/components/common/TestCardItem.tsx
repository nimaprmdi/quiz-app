import { useNavigate } from "react-router-dom";

interface TestCardProps {
  test: {
    categoryIcon: {
      url: string;
    };
    id: string;
    title: string;
    categorySlug: string;
    answers: [];
    questions: [];
  };
  index: number;
  redirectPage?: string;
}

const TestCardItem = ({ test, index, redirectPage }: TestCardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${redirectPage}/${test.categorySlug}`)}
      className="c-test__item w-full lg:w-2/4 h-16 bg-primaryDark rounded-lg flex justify-between items-center px-5 overflow-auto gap-14 "
    >
      <div className="flex gap-3 items-center">
        <div className="text-gray-400 font-bold">{index}</div>

        <img src={test.categoryIcon.url} alt={test.title} style={{ width: "30px" }} />

        <h5 className="text-white">{test.title}</h5>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 bg-glassLight px-2 rounded-md">
          <span className="text-white text-2xl">{test.questions.length}</span>
          <span>Questions</span>
        </div>

        <div className="flex items-center gap-2 bg-glassLight px-2 rounded-md">
          <span className="text-white text-2xl">{test.answers.length}</span>
          <span>Answers</span>
        </div>
      </div>
    </div>
  );
};

export default TestCardItem;
