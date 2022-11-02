import React from "react";

const Score = () => {
  return (
    <div className="c-score //GLOB w-full h-primary //BG bg-primary //DISP flex justify-center items-center content-center">
      <div className="overflow-auto px-8 pb-16 md:pb-0 lg:px-0 w-full lg:w-10/12 h-primary md:h-4/5 relative z-20 bg-glassLight lg:rounded-3xl max-w-[1184px] backdrop-blur-md flex justify-center items-center flex-wrap content-start gap-[2px]">
        <div className="mt-8">
          <h1 className="w-full text-white text-4xl">Congrats Nima 🎉</h1>

          <div className="flex mt-16 gap-14 flex-wrap">
            <div className="c100 p95 center">
              <span>34%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
              <p className="w-max max-w-[150px] text-white capitalize text-base top-[120%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
                Lorem ipsum dolo
              </p>
            </div>

            <div className="c100 p34 center">
              <span>34%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
              <p className="w-max max-w-[150px] text-white capitalize text-base top-[120%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
                Hello
              </p>
            </div>

            <div className="c100 p34 center">
              <span>34%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
              <p className="w-max max-w-[150px] text-white capitalize text-base top-[120%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
                Hello
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-24">
          <span className="text-6xl md:text-6xl 3xl:text-9xl text-white font-bold">
            6000
          </span>
        </div>
      </div>

      <div className="overflow-hidden h-full w-full absolute z-10 bottom-0 right-0">
        <span className="absolute bottom-[-50px] lg:bottom-[-120px] right-[10px] lg:right-[7%] text-57.5 lg:text-112.5 z-10 font-bold text-white">
          JS
        </span>
      </div>
    </div>
  );
};

export default Score;
