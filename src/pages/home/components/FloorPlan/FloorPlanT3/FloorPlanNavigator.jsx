import React from "react";
import { data } from "../../../../../data/floorData";
import Slider from "react-slick";
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
      <div className=" max-md:hidden grid sm:max-lg:grid-cols-4 grid-cols-2 2xl:grid-cols-3 gap-4 w-full max-sm:max-w-[270px] sm:max-lg:max-w-[500px] lg:max-w-full ">
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
              className={`transition-all duration-500 p-4 border-2 border-secondary w-32 h-32 origin-bottom flex flex-col justify-center items-start cursor-pointer relative ${
                selected == index ? "bg-secondary text-white" : ""
              } `}
            >
              <div className="h-10 w-10 bg-third absolute -top-[3px] -right-[3px]  border-b-secondary border-2 border-l-secondary border-third border-t-white border-r-white" />
              <p className="text-bigger"> {item.btnTitle} </p>
              <p className="text-smaller text-start">
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

      <Slider
        dots
        infinite={true}
        slidesToShow={1}
        centerMode
        centerPadding="60px"
        className="w-[260px] sm:w-[400px] md:hidden my-8"
        autoplay
        autoplaySpeed={2000}
      >
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
              className={`transition-all duration-500 p-4 border-2 border-secondary !w-32 !h-32 origin-bottom flex flex-col justify-center items-start cursor-pointer relative ${
                selected == index ? "bg-secondary text-white" : ""
              } `}
            >
              <div className="h-10 w-10 bg-third absolute -top-[3px] -right-[3px]  border-b-secondary border-2 border-l-secondary border-third border-t-white border-r-white" />
              <p className="text-bigger"> {item.btnTitle} </p>
              <p className="text-smaller text-start">
                {
                  item.btnSubTitle.find(
                    (x) => x.lng == location.pathname.substring(1)
                  )?.value
                }
              </p>
            </button>
          );
        })}
      </Slider>
    </div>
  );
};

export default FloorPlanNavigator;
