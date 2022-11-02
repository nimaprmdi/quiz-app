import React, { MouseEvent, useRef } from "react";
import type { InteractionItem } from "chart.js";
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
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const Stats = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July"];

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        fill: true,
        label: "Scores In JS",
        borderColor: "rgb(0, 100, 255)",
        borderWidth: 4,
        data: labels.map(() => Math.random() * 10),
      },
    ],
  };

  return (
    <div className="c-score //GLOB w-full h-primary //BG bg-primary //DISP flex justify-center items-center content-center">
      <div className="//GLOB overflow-auto px-8 pb-16 md:pb-0 lg:px-0 w-full lg:w-10/12 h-primary md:h-4/5 relative z-20 bg-glassLight lg:rounded-3xl max-w-[1184px] backdrop-blur-md flex justify-center items-center flex-wrap content-center">
        <div className="w-full h-full lg:w-4/5 lg:h-4/5 //DISP flex items-center content-center">
          <Chart type="bar" data={data} />
        </div>
      </div>

      <div className="overflow-hidden h-full w-full absolute z-10 bottom-0 right-0">
        <span className="absolute bottom-[-50px] lg:bottom-[-120px] right-[10px] lg:right-[7%] text-57.5 lg:text-112.5 z-10 font-bold text-white">
          JS
        </span>
      </div>
    </div>
  );
};

export default Stats;
