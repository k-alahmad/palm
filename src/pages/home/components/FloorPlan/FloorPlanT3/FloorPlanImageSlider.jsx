import React from "react";
import LazyImage from "../../../../../components/UI/LazyImage";
import { data } from "../../../../../data/floorData";
import Slider from "react-slick";

const FloorPlanImageSlider = ({ sliderRef, selected }) => {
  return (
    <Slider
      ref={sliderRef}
      dots={false}
      infinite={false}
      speed={300}
      centerMode
      slidesToScroll={1}
      slidesToShow={1}
      touchMove={false}
      className="h-[500p] w-full"
      arrows={false}
    >
      {data.floors.map((item, index) => {
        return (
          <LazyImage
            key={index}
            src={item.img}
            divStyle={`${
              selected == index ? "scale-125 sm:scale-110" : " scale-0"
            }  h-[500px] xl:h-[750px] w-full sm:my-8 max-sm:-my-20 xl:my-0 xl:mt-10`}
            skelatonStyle={"h-[500px] xl:h-[650px] w-full"}
            alt={item.title}
            imgStyle={"h-[500px] xl:h-[650px] w-full object-contain"}
          />
        );
      })}
    </Slider>
  );
};

export default FloorPlanImageSlider;
