import React from "react";
import { Icon } from "@iconify/react";

const PopUp = () => {
  return (
    <div className="//POS absolute top-0 left-0 z-50 w-full h-screen //BG backdrop-blur-[4px] //DISP flex justify-center items-center">
      <div className="w-[488px] px-4 py-8 bg-glassDark backdrop-blur-xl rounded-lg text-left text-white">
        <div className="w-max bg-glassLight p-4 rounded-full">
          <Icon icon="ph:pencil-simple-line-light" width={40} />
        </div>

        <h3 className="mt-6">Pop-Up</h3>

        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex inventore impedit
          tempora consectetur est maxime distinctio!
        </p>

        <button className="c-btn c-btn--secondary mt-4 float-right">Click</button>
      </div>
    </div>
  );
};

export default PopUp;
