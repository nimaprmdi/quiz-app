import React, { useContext, useEffect } from "react";
import useTimer from "../../hooks/useTimer";
import { useSwiper } from "swiper/react";

interface AnswerItemProps {
  id: string;
  title: string;
  index: number;
  onHandleDispatch: (id: string, time: number) => void;
  selectedId: string | undefined;
}

const AnswerItem = ({ id, title, index, onHandleDispatch, selectedId }: AnswerItemProps) => {
  const { time, handleStart } = useTimer();
  const swiper = useSwiper();

  return (
    <div
      className={`w-full md:w-[390px] bg-primaryDark felx justify-start items-center py-4 px-4 rounded-md hover:bg-gray-600 cursor-pointer linear duration-150 ${
        selectedId === id && "bg-gray-600"
      }`}
      onClick={() => onHandleDispatch(id, 66666)}
    >
      <div className="flex items-center gap-6">
        <span className="c-btn cursor-pointer bg-primaryDark px-3 py-1 border border-gray-800 rounded-md text-accent">
          {index}
        </span>

        <h5 className="text-left text-accent capitalize">{title}</h5>
      </div>
    </div>
  );
};

export default AnswerItem;
