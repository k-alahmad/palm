import React, { useState } from "react";
import { data } from "../../../../../data/photoGallery";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
const PhotoGalleryNavigator = ({
  selected,
  setSelected,
  insideSliderRef,
  navSliderRef,
}) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const location = useLocation();
  return (
    <div className="px-[2%]">
      <div className="flex flex-row justify-center items-center text-small font-semibold">
        <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-x-5 2xl:gap-x-8 w-full">
          {data.navBtns.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setSelected(index);
                  navSliderRef.current.slickGoTo(index);
                }}
                key={index}
                className={`uppercase h-20  border-2 origin-bottom rounded-3xl rounded-tr-none ${
                  selected == index
                    ? "bg-primary text-white"
                    : "border-primary transition-all duration-500"
                } `}
              >
                {
                  item.type.find((x) => x.lng == location.pathname.substring(1))
                    .value
                }
              </button>
            );
          })}
        </div>
      </div>

      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        dots={false}
        ref={navSliderRef}
        className="w-full h-full max-lg:hidden"
      >
        {data.navBtns.map((item, index) => {
          return (
            <div
              key={index}
              className="!grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-1 mt-6 w-full border-none outline-none"
            >
              {item.imgs.map((img, index) => {
                return (
                  <img
                    src={img}
                    key={index}
                    className={`h-40 object-cover w-full cursor-pointer border-4 transition-all duration-500 rounded-3xl rounded-tr-none ${
                      selectedImg == index
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                    alt={"Gallery"}
                    onClick={() => {
                      insideSliderRef.current.slickGoTo(index);
                      setSelectedImg(index);
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PhotoGalleryNavigator;
