import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

const Header = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <header
      className={`w-full  h-20 flex justify-center bg-glassExtraLight px-4 xl:px-0 relative z-40 ${
        pathname === "/404" && "opacity-0"
      }`}
    >
      <div className="w-[1184px] h-full flex justify-between items-center">
        <div className="c-header__links">
          <Link to="/welcome/asd" type="a" className="text-white hover:text-gray-300">
            Exams
          </Link>
        </div>

        <div className="c-header__logo">
          <h2 className="text-white text-4xl uppercase">Quiz App</h2>
        </div>

        <div className="c-header__about flex justify-between gap-6">
          <Icon icon="akar-icons:github-fill" width={20} />

          <Icon icon="akar-icons:codepen-fill" width={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
