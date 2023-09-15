import React from "react";
import "./3D1.css";

const Text3D = ({ title }) => {
  let splittedTitle = title.split(" ");

  return (
    <div
      style={{
        background: `linear-gradient(-60deg, #218DC2 20%, white 80%)`,
      }}
      className="textContainer1 pb-2 px-4 md:px-4 max-sm:mx-2 rounded-[60px] rounded-tr-none"
    >
      <span className="text1"> {splittedTitle[0]} </span>
      <span className="text2"> {splittedTitle[1] ?? ""} </span>
    </div>
  );
};

export default Text3D;
