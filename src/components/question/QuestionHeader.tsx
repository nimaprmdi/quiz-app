import React from "react";
import { Icon } from "@iconify/react";

const QuestionHeader = () => {
  return (
    <div className="w-full px-4 xl:px-0 flex justify-between flex-wrap gap-y-2">
      <div className="w-max flex justify-between items-center ">
        <div className="rounded-full text-center px-6 py-[10px] text-white bg-primaryDark opacity-80">
          1 / 20
        </div>
      </div>

      <div className="w-max flex justify-end items-center gap-4">
        <div className="rounded-full text-center px-6 py-[10px] text-white bg-primaryDark flex items-center gap-3 opacity-80">
          1 / 20
          <Icon icon="carbon:time" width={20} />
        </div>

        <div className="rounded-full text-center px-6 py-[10px] text-white bg-primaryDark flex items-center gap-3 opacity-80">
          1 / 20
          <Icon icon="carbon:time" width={20} />
        </div>
      </div>
    </div>
  );
};

export default QuestionHeader;
