import React from "react";
import GradiantText from "../GradientText";
import Text3D1 from "./Text3D1";
import Text3D2 from "./Text3D2";

const ComponentTitle = ({ title }) => {
  return (
    <div className="relative text-bigger sm:text-huge md:text-[55px] lg:text-[65px] flex justify-center items-center font-bold py-20 text-center md:text-start uppercase">
      {/* <GradiantText text={title} /> */}
      {/* <Text3D1 title={title} /> */}
      <Text3D2 title={title} />
    </div>
  );
};

export default ComponentTitle;
