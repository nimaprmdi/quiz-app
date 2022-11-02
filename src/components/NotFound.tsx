import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const NotFound = () => {
  return (
    <section className="w-full h-primary overflow-hidden flex justify-center items-center">
      <div className="w-full max-w-[700px] flex flex-wrap px-4 mt-[-80px]">
        <h2 className="text-white text-7xl text-left">404.</h2>

        <div className="c-404__pre  w-full mt-10 rounded-2xl bg-primaryDark p-7">
          <p className="c-404__desc mb-1 text-left text-primaryMediumDark"> /** </p>

          <p className="c-404__desc mb-1 text-left text-primaryMediumDark">* 404 </p>

          <p className="c-404__desc mb-1 text-left text-primaryMediumDark">* Woops. </p>

          <p className="c-404__desc mb-1 text-left text-primaryMediumDark">
            * The page you are looking for hasn't been found, apologize.
          </p>

          <p className="c-404__desc mb-1 text-left text-primaryMediumDark"> **/</p>
        </div>

        <div className="w-full flex justify-end">
          <Link
            to="/"
            className="capitalize mt-8 text-lg text-white flex items-center gap-4 hover:text-gray-300 linear duration-150"
          >
            <Icon icon="bytesize:arrow-left" />
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
