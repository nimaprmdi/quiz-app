import React from "react";
import AnswerItem from "./AnswerItem";

const Answers = () => {
  return (
    <div className="c-test mt-10 px-4 xl:mt-8 w-full h-4/5 flex justify-center items-center">
      <div className="w-full max-w-[1184px] bg-glassLight backdrop-blur-md rounded-3xl relative z-20 py-8">
        <h2 className="c-test__title text-2xl text-white w-full">Take A Test</h2>

        <div className="c-test__cards w-full gap-2 flex justify-between items-center content-center flex-wrap mt-9 max-h-auto 4xl:max-h-72 overflow-auto px-4 ">
          <ul className="w-full flex justify-center gap-14 gap-y-3 flex-wrap">
            <li>
              <AnswerItem />
            </li>

            <li>
              <AnswerItem />
            </li>

            <li>
              <AnswerItem />
            </li>

            <li>
              <AnswerItem />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Answers;
