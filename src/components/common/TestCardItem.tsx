import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

interface TestCardProps {
  test: {
    categoryIcon: {
      url: string;
    };
    id: string;
    title: string;
    categorySlug: string;
  };

  index: number;
}

const TestCardItem = ({ test, index }: TestCardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/welcome/${test.categorySlug}`)}
      className="c-test__item w-full lg:w-2/4 h-16 bg-primaryDark rounded-lg flex justify-between items-center px-5 overflow-auto gap-14 "
    >
      <div className="flex gap-3 items-center">
        <div className="text-gray-400 font-bold">{index}</div>

        <img
          src={test.categoryIcon.url}
          alt={test.title}
          style={{ width: "30px" }}
        />

        <h5 className="text-white">{test.title}</h5>
      </div>

      <div className="flex gap-4 items-center">
        <span className="text-white text-base">6000</span>
        <span className="text-white text-2xl">6000</span>
      </div>
    </div>
  );
};

export default TestCardItem;
