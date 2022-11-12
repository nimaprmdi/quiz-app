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
          <Link to="/" type="a" className="text-white hover:text-gray-300 text-xl">
            Tests
          </Link>

          <Link to="/stats" className="text-white hover:text-gray-300 text-xl ml-4">
            Statistics
          </Link>
        </div>

        <div className="c-header__logo">
          <h2 className="text-white text-4xl uppercase">Quiz App</h2>
        </div>

        <div className="c-header__about flex justify-between gap-6">
          <a href="https://github.com/nimaprmdi/quiz-app" target="_blank">
            <Icon icon="akar-icons:github-fill" width={25} fill="#fff" color="#fff" />
          </a>

          <a href="http://nimapourmohammadi.com/" target="_blank">
            <Icon icon="ant-design:global-outlined" width={28} fill="#fff" color="#fff" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
