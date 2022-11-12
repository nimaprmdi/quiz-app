import LoadingComponent from "./common/LoadingComponent";
import TestCardItem from "./common/TestCardItem";
import CategoryIcon from "./common/CategoryIcon";
import Loading from "./common/Loading";
import { GET_CATEGORY } from "../graphql/query";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

interface Tests {
  id: string;
  title: string;
  categorySlug: string;
  categoryIcon: {
    url: string;
  };
  answers: [];
  questions: [];
}

interface TestsProps {
  redirectPage?: string;
  title?: string;
}

const Tests = ({ redirectPage, title }: TestsProps): JSX.Element => {
  const { data, loading, error } = useQuery(GET_CATEGORY);

  useEffect(() => {
    console.log({ data, loading, error });
  }, [data, loading, error]);

  if (loading) return <LoadingComponent />;
  if (error) return <LoadingComponent hasError={error.message} />;

  return (
    <section className="w-full h-primary overflow-hidden flex justify-center items-center">
      <div className="c-test overflow-auto px-8 lg:px-0 w-full lg:w-10/12 h-screen md:h-4/5 relative z-20 bg-glassLight rounded-3xl max-w-[1184px] backdrop-blur-md flex justify-center items-center flex-wrap content-center gap-[2px] animate-fade-in duration-300">
        <h2 className="c-test__title text-2xl text-white w-full">{title}</h2>

        <div className="c-test__cards w-full gap-2 flex justify-center items-center content-center flex-wrap mt-9">
          {data.categories.length > 0
            ? data.categories.map((test: Tests, index: number) => (
                <TestCardItem key={test.id} redirectPage={redirectPage} index={++index} test={test} />
              ))
            : "No Data Found !"}
        </div>
      </div>

      <CategoryIcon title="quiz" />
    </section>
  );
};

export default Tests;
