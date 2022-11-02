import React from "react";

const AnswerItem = () => {
  return (
    <div className="w-full md:w-[390px]  bg-primaryDark felx justify-start items-center py-4 px-4 rounded-md hover:bg-gray-600 cursor-pointer linear duration-150 ">
      <div className="flex items-center gap-6">
        <span className="c-btn cursor-pointer bg-primaryDark px-3 py-1 border border-gray-800 rounded-md text-accent">
          1
        </span>

        <h5 className="text-left text-accent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta, dolorem illo
        </h5>
      </div>
    </div>
  );
};

export default AnswerItem;
