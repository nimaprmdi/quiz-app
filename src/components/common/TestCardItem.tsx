import React from "react";
import { Icon } from "@iconify/react";

const TestCardItem = () => {
  return (
    <div className="c-test__item w-full lg:w-2/4 h-16 bg-primaryDark rounded-lg flex justify-between items-center px-5 overflow-auto gap-14">
      <div className="flex gap-3 items-center">
        <div className="text-gray-400 font-bold">1</div>
        <Icon icon="logos:javascript" width="30" />
        <h5 className="text-white">JavaScript</h5>
      </div>

      <div className="flex gap-4 items-center">
        <span className="text-white text-base">6000</span>
        <span className="text-white text-2xl">6000</span>
      </div>
    </div>
  );
};

export default TestCardItem;
