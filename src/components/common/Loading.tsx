import React from "react";
import spinner from "../../assets/images/spinner.svg";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default Loading;
