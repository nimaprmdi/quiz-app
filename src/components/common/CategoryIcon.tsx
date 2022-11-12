import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_TEXT_ICON } from "../../graphql/query";
import { useParams } from "react-router-dom";

interface CategoryIconProps {
  title?: string;
}

const CategoryIcon = ({ title = "" }: CategoryIconProps) => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORY_TEXT_ICON, {
    fetchPolicy: "network-only",
    variables: {
      categorySlug: slug,
    },
  });
  const [iconText, setIconText] = useState("");

  useEffect(() => {
    if (data) {
      !title && setIconText(data.globals[0].globalIconText);
    }
  }, [loading, error, data]);

  return (
    <div className="overflow-hidden h-full w-full absolute z-10 bottom-0 right-0 ">
      <span className="absolute bottom-[-50px] lg:bottom-[-120px] right-[10px] lg:right-[7%] text-57.5 lg:text-112.5 z-10 font-bold text-white uppercase opacity-0 animate-fade-in duration-700">
        {title || iconText}
      </span>
    </div>
  );
};

export default CategoryIcon;
