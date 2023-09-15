import React from "react";
import colors from "../../../settings";

const Text3D2 = ({ title }) => {
  let splittedTitle = title.split(" ");

  return (
    <div
      style={{
        background: `linear-gradient(-60deg, ${colors.third} 40%, ${colors.secondary} 60%)`,
      }}
      className=" pb-2 px-4 md:px-4 max-sm:mx-2 rounded-[60px] rounded-tr-none"
    >
      <p
        style={{
          textShadow:
            "-0px -0px 0px rgba(255, 255, 255, 0.3), 2px 2px 0px rgba(0, 0, 0, 0.8)",
        }}
      >
        <span className="text-third"> {splittedTitle[0]} </span>
        <span className="text-secondary"> {splittedTitle[1] ?? ""} </span>
      </p>
    </div>
  );
};

export default Text3D2;
