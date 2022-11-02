import React from "react";

const QuestionTitle = () => {
  return (
    <div className="w-full flex justify-center mt-12 3xl:mt-24 px-4">
      <div className="w-[520px] px-4 md:px-14 py-7 bg-primaryDark rounded-lg text-left">
        <h3 className="before:content-['>'] before:mr-7 before:text-xl before:text-gray-400 text-white text-xl">
          NaN + 20 - (2 * !true)
        </h3>
      </div>
    </div>
  );
};

export default QuestionTitle;
