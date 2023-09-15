import React from "react";
import { data } from "../../../../../data/headerData";
import { systemSettings } from "../../../../../settings";
import { useLocation } from "react-router-dom";
const HeaderSlidingText = () => {
  const location = useLocation();
  let title =
    systemSettings.availableLanguages.length > 1
      ? data.titles[2].find(
          (title) => title.lng == location.pathname.substring(1)
        )?.value
      : data.titles[2][0];

  let headerTitle = title.split(" ");
  return (
    <div className="text-9xl bg-transparent text-primary overflow-hidden  -mt-[350px] max-md:hidden">
      <p className="animate-textCamera relative whitespace-nowrap py-4">
        {headerTitle[0]}
        <span className="border-text text-transparent">
          {` ${headerTitle[1]} `}
        </span>
        {headerTitle[2]}
      </p>
    </div>
  );
};

export default HeaderSlidingText;
