import React, { useRef, useState } from "react";
import FloorPlanImageSlider from "./FloorPlanImageSlider";
import FloorPlanNavigator from "./FloorPlanNavigator";
import FloorPlanInfoSlider from "./FloorPlanInfoSlider";
import ComponentTitle from "../../../../../components/UI/ComponentTitle";
const FloorPlanT2 = () => {
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
  const sliderRef2 = useRef();
  const sliderRef3 = useRef();
  return (
    <>
      <ComponentTitle title={"Floor Plans"} />
      <div className="lg:grid lg:grid-cols-12 gap-1">
        <div className="col-span-8 hidden lg:block">
          <div>
            <FloorPlanImageSlider selected={selected} sliderRef={sliderRef2} />
          </div>
        </div>
        <div className="col-span-4 space-y-3 lg:space-y-12">
          <div className="lg:hidden max-lg:-mt-6">
            <FloorPlanImageSlider selected={selected} sliderRef={sliderRef3} />
          </div>
          <div className="flex max-md:flex-col lg:flex-col justify-evenly items-center">
            <FloorPlanNavigator
              selected={selected}
              setSelected={setSelected}
              sliderRef={sliderRef}
              sliderRef2={sliderRef2}
              sliderRef3={sliderRef3}
            />
            <FloorPlanInfoSlider selected={selected} sliderRef={sliderRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorPlanT2;
