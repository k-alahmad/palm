import React from "react";
import { data } from "../../../../../data/floorData";
import { useLocation } from "react-router-dom";
const FloorPlanNavigator = ({
  selected,
  setSelected,
  sliderRef,
  sliderRef2,
  sliderRef3,
}) => {
  const location = useLocation();
  return (
    <div className="flex flex-col justify-center items-center font-semibold">
      <div className="grid sm:max-lg:grid-cols-4 grid-cols-2 gap-4 w-full max-sm:max-w-[270px] sm:max-lg:max-w-[500px] lg:max-w-[270px] ">
        {data.floors.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                sliderRef.current.slickGoTo(index);
                sliderRef2.current.slickGoTo(index);
                sliderRef3.current.slickGoTo(index);
                setSelected(index);
              }}
              className={`transition-all duration-500 p-2 border-2 min-w-32 origin-bottom rounded-2xl rounded-tr-none flex flex-col justify-center items-center cursor-pointer ${
                selected == index ? "bg-primary text-white" : "border-primary"
              } `}
            >
              <p className="text-bigger"> {item.btnTitle} </p>
              <p className="text-smaller">
                {
                  item.btnSubTitle.find(
                    (x) => x.lng == location.pathname.substring(1)
                  )?.value
                }
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FloorPlanNavigator;
