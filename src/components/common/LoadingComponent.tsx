import React from "react";
import spinner from "../../assets/images/spinner.svg";

interface LoadingComponentProps {
  hasError?: string;
}

const LoadingComponent = ({ hasError = "" }: LoadingComponentProps) => {
  return (
    <section className="w-full h-primary overflow-hidden flex justify-center items-center">
      <div className="c-test overflow-auto px-8 lg:px-0 w-full lg:w-10/12 h-screen md:h-4/5 relative z-20 bg-transparent rounded-3xl max-w-[1184px] backdrop-blur-md flex justify-center items-center flex-wrap content-center gap-[2px]">
        <div>{hasError ? <h3>{hasError}</h3> : <img src={spinner} alt="loading" />}</div>
      </div>
    </section>
  );
};

export default LoadingComponent;
