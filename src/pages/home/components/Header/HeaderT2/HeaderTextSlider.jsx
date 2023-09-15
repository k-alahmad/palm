import React from "react";
import Slider from "react-slick";
import { data } from "../../../../../data/headerData";
import { systemSettings } from "../../../../../settings";
const HeaderTextSlider = () => {
  return (
    <Slider
      vertical
      verticalSwiping
      arrows={false}
      dots={false}
      touchMove={false}
      autoplay
      autoplaySpeed={1200}
      className="w-[90%] 2xl:w-[50%] absolute top-[50%] sm:top-[30%] left-[5%] text-white h-full"
    >
      {data.textSlider.map((item, index) => {
        return (
          <div key={index} className="cursor-pointer min-h-full ">
            <div className="sm:flex items-end">
              <img
                src={item.icon}
                alt="icon"
                className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 mx-6 rounded"
              />
              <div>
                <p className="text-[40px] sm:text-[50px] lg:text-[80px] font-bold text-white drop-shadow-2xl">
                  {
                    item.title?.find(
                      (x) => x?.lng == location.pathname.substring(1)
                    )?.value
                  }
                </p>
                <p className=" text-big sm:text-bigger lg:text-huge font-semibold uppercase drop-shadow-2xl">
                  {systemSettings.availableLanguages.length > 1
                    ? item.subTitle?.find(
                        (x) => x?.lng == location.pathname.substring(1)
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
