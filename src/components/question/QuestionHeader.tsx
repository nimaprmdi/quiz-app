import { useState, useEffect, useMemo, useContext } from "react";
import { Icon } from "@iconify/react";
import useTimer from "../../hooks/useTimer";
import { SwiperContext } from "../../context/SwiperContext";

const QuestionHeader = () => {
  const { time, handleStart, handlePause } = useTimer();
  const { state } = useContext(SwiperContext);

  useEffect(() => {
    console.log("number", state);
  }, [state]);

  useEffect(() => {
    handleStart();
  }, []);

  return (
    <div className="w-full px-4 xl:px-0 flex justify-between flex-wrap gap-y-2 relative z-40">
      <div className="w-max flex justify-between items-center ">
        <div className="rounded-full text-center px-6 py-[10px] text-white bg-primaryDark opacity-80">
          <span>
            {state.index} / {state.totalIndex}
          </span>
        </div>
      </div>

      <div className="w-max flex justify-end items-center gap-4">
        <div className="rounded-full text-center px-6 py-[10px] text-white bg-primaryDark flex items-center gap-3 opacity-80">
          <div className="flex">
            <span className="digits">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span className="digits">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
            <span className="digits mili-sec">{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>

          <Icon icon="carbon:time" width={20} />
        </div>

        <div className="rounded-full text-center px-6 py-[10px] text-white bg-primaryDark flex items-center gap-3 opacity-80">
          1 / 20
          <Icon icon="fluent-mdl2:world-clock" width={20} />
        </div>
      </div>
    </div>
  );
};

export default QuestionHeader;
