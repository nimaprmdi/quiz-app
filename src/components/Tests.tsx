import React from "react";
import TestCardItem from "./common/TestCardItem";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY } from "../graphql/query";
import Loading from "./common/Loading";

interface Tests {
  categoryIcon: {
    url: string;
  };
  id: string;
  title: string;
  categorySlug: string;
}

const Tests = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_CATEGORY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="w-full h-primary overflow-hidden flex justify-center items-center">
      <div className="c-test overflow-auto px-8 lg:px-0 w-full lg:w-10/12 h-screen md:h-4/5 relative z-20 bg-glassLight rounded-3xl max-w-[1184px] backdrop-blur-md flex justify-center items-center flex-wrap content-center gap-[2px]">
        <h2 className="c-test__title text-2xl text-white w-full">
          Take A Test
        </h2>

        <div className="c-test__cards w-full gap-2 flex justify-center items-center content-center flex-wrap mt-9">
          {data.categories.length > 0 ? (
            data.categories.map((test: Tests, index: number) => (
              <TestCardItem key={test.id} index={++index} test={test} />
            ))
          ) : (
            <Loading />
          )}
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

export default Tests;
