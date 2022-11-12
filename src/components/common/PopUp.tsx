import { useState } from "react";
import { Icon } from "@iconify/react";

interface PopUpProps {
  title?: string;
  description?: string;
  handlePopClick: (name: string) => void;
}

const PopUp = ({ title, description, handlePopClick }: PopUpProps) => {
  const [value, setValue] = useState("");

  return (
    <div className="c-popup selection://POS absolute top-0 left-0 z-50 w-full h-screen //BG backdrop-blur-[4px] //DISP flex justify-center items-center">
      <div className="w-[488px] px-4 py-8 bg-glassDark backdrop-blur-xl rounded-lg text-left text-white animate-fade-in duration-300">
        <div className="w-max bg-glassLight p-4 rounded-full animate-fade-in duration-300">
          <Icon icon="ph:pencil-simple-line-light" width={40} />
        </div>

        <h3 className="mt-6">{title}</h3>

        <p className="mt-4">{description}</p>

        <input
          className="my-4"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Your Name Here"
          required
        />

        <button onClick={() => handlePopClick(value)} className="c-btn c-btn--secondary mt-4 float-right">
          Next
        </button>
      </div>
    </div>
  );
};

export default PopUp;
