import { useQuery } from "@apollo/client";
import { GET_GLOBAL_BY_CAT } from "../graphql/query";
import { Link, useParams } from "react-router-dom";
import IconTitle from "./common/IconTitle";

const Welcome = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_GLOBAL_BY_CAT, {
    variables: {
      slug,
    },
  });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  const { globalTitle, globalDescription, globalIconText } = data.category.global[0];
  const { categorySlug } = data.category;

  return (
    <section className="w-full h-primary overflow-hidden flex justify-center items-center">
      <div className="c-test overflow-auto px-8 lg:px-0 w-full lg:w-10/12 h-screen md:h-4/5 relative z-20 bg-glassLight rounded-3xl max-w-[1184px] backdrop-blur-md flex justify-center items-center flex-wrap content-center gap-[2px]">
        <div>
          <h1 className="w-full text-white text-2xl">{globalTitle}</h1>
          <p className="w-full max-w-[680px] text-center text-white mt-3">{globalDescription}</p>

          <Link to={`/question/${categorySlug}`} className="c-btn mt-6 inline-block">
            Continue
          </Link>
        </div>
      </div>

      <IconTitle title={globalIconText} />
    </section>
  );
};

export default Welcome;
