import LoadingComponent from "./common/LoadingComponent";
import CategoryIcon from "./common/CategoryIcon";
import PopUp from "./common/PopUp";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useLazyQuery } from "@apollo/client";
import { GET_TIMES_STATS } from "../graphql/query";
import { useParams } from "react-router-dom";

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip);

const Stats = () => {
  const { slug } = useParams();
  const [name, setName] = useState("");
  const [displayPopup, setDisplayPopup] = useState(true);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        type: "line" as const,
        fill: true,
        label: "Scores",
        borderColor: "rgb(0, 100, 255)",
        borderWidth: 4,
        data: [],
      },
    ],
  });

  const [getTimes, { data, error, loading }] = useLazyQuery(GET_TIMES_STATS, {
    variables: {
      categorySlug: slug,
      timeName: name,
    },
  });

  const handlePopup = (inputName: string) => {
    setName(inputName);
    setDisplayPopup(false);
    getTimes();
  };

  useEffect(() => {
    if (data) {
      const { times } = data.categories[0];
      const dates = times.map((time: { timeDate: string }) => time.timeDate);
      const scores = times.map((time: { timeCorrectAnswers: number }) => time.timeCorrectAnswers);

      setChartData({
        ...chartData,
        labels: dates,
        datasets: [
          {
            type: "line" as const,
            fill: true,
            label: `Scores In ${slug}`,
            borderColor: "rgb(0, 100, 255)",
            borderWidth: 4,
            data: scores,
          },
        ],
      });
    }
  }, [data, loading, error]);

  if (loading) return <LoadingComponent />;
  if (error) return <LoadingComponent hasError={error.message} />;

  return (
    <div className="c-score //GLOB w-full min-h-screen //BG bg-primary //DISP flex justify-center items-center content-center">
      {displayPopup && (
        <PopUp
          title="Please enter name"
          description="Please enter your registered name to get your data from the server."
          handlePopClick={(name) => handlePopup(name)}
        />
      )}

      <div className="//GLOB overflow-auto px-8 py-16 pb-16 lg:px-0 w-full lg:w-10/12 h-primary md:h-4/5 relative z-20 bg-glassLight lg:rounded-3xl max-w-[1184px] backdrop-blur-md flex justify-center items-center flex-wrap content-center animate-fade-in duration-300">
        <div className="w-full h-full lg:w-4/5 lg:h-4/5 //DISP flex items-center content-center">
          <Chart type="bar" data={chartData} />
        </div>
      </div>

      <CategoryIcon title="stats" />
    </div>
  );
};

export default Stats;
