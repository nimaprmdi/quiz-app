import React from "react";

interface IconTitleProps {
  title: string;
}

const IconTitle = ({ title }: IconTitleProps) => {
  return (
    <div className="overflow-hidden h-full w-full absolute z-10 bottom-0 right-0">
      <span className="absolute bottom-[-50px] lg:bottom-[-120px] right-[10px] lg:right-[7%] text-57.5 lg:text-112.5 z-10 font-bold text-white uppercase">
        {title}
      </span>
    </div>
  );
};

export default IconTitle;
