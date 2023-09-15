import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { data } from "../../../../../data/headerData";
import { useLocation } from "react-router-dom";
import { systemSettings } from "../../../../../settings";
const HeaderTextSlider = () => {
  const location = useLocation();

  return (
    <Slider
      arrows={false}
      dots={false}
      touchMove={false}
      autoplay
      autoplaySpeed={2000}
      speed={1000}
      className="w-full text-white h-[250px]"
    >
      {data.textSlider.map((item, index) => {
        return (
          <div key={index} className="cursor-pointer ">
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center">
              <img
                src={item.icon}
                alt="icon"
                className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 mx-6 rounded"
              />
              <div>
                <p className="text-[40px] sm:text-[50px] lg:text-[80px] font-bold text-white drop-shadow-2xl">
                  {systemSettings.availableLanguages.length > 1
                    ? item.title?.find(
                        (x) =>
                          x?.lng == location.pathname.toString().substring(1)
                      )?.value
                    : item.title[0].value}
                </p>
                <p className=" text-big sm:text-bigger lg:text-huge font-semibold uppercase drop-shadow-2xl">
                  {systemSettings.availableLanguages.length > 1
                    ? item.subTitle?.find(
                        (x) =>
                          x?.lng == location.pathname.toString().substring(1)
                      )?.value
                    : item.subTitle[0].value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default HeaderTextSlider;
