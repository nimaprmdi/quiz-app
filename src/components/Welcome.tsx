import React from "react";
import { useParams } from "react-router-dom";

const Welcome = () => {
  const { slug } = useParams();

  return (
    <section className="w-full h-primary overflow-hidden flex justify-center items-center">
      <div className="c-test overflow-auto px-8 lg:px-0 w-full lg:w-10/12 h-screen md:h-4/5 relative z-20 bg-glassLight rounded-3xl max-w-[1184px] backdrop-blur-md flex justify-center items-center flex-wrap content-center gap-[2px]">
        <div>
          <h1 className="w-full text-white text-2xl">Welcome To JavaScript Test</h1>
          <p className="w-full max-w-[680px] text-center text-white mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit in
            iste cupiditate, enim, sunt nostrum sequi porro repudiandae, sed suscipit hic
            laboriosam reiciendis omnis rem! Sunt, eum possimus sapiente magni repudiandae
            reprehenderit.
          </p>

          <button className="c-btn mt-6">Click</button>
        </div>
      </div>

      <div className="overflow-hidden h-full w-full absolute z-10 bottom-0 right-0">
        <span className="absolute bottom-[-50px] lg:bottom-[-120px] right-[10px] lg:right-[7%] text-57.5 lg:text-112.5 z-10 font-bold text-white">
          JS
        </span>
      </div>
    </section>
  );
};

export default Welcome;
