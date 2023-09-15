import React from "react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const ImagesSlider = ({ imgs, insideSliderRef }) => {
  function SampleNextArrow({ onClick }) {
    return (
      <div
        className="absolute cursor-pointer z-30 right-[5%] top-[50%] rounded-full"
        onClick={onClick}
      >
        <MdArrowForwardIos className="text-primary drop-shadow-2xl text-[70px]" />
      </div>
    );
  }
  function SamplePrevArrow({ onClick }) {
    return (
      <div
        className="absolute cursor-pointer z-30 left-[5%] top-[50%] rounded-full"
        onClick={onClick}
      >
        <MdArrowBackIos className="text-primary drop-shadow-2xl text-[70px]" />
      </div>
    );
  }
  return (
    <Slider
      ref={insideSliderRef}
      arrows={true}
      infinite={true}
      speed={400}
      slidesToScroll={1}
      slidesToShow={1}
      touchMove
      className="w-full h-full overflow-hidden"
      nextArrow={<SampleNextArrow />}
      prevArrow={<SamplePrevArrow />}
    >
      {imgs.map((item, i) => {
        return (
          <img
            key={i}
            src={item}
            className="h-[300px] sm:h-[400px] md:h-[750px] w-full object-contain lg:object-fill lg:rounded-[60px] lg:rounded-tr-none"
            alt={"Gallery " + i}
          />
        );
      })}
    </Slider>
  );
};

export default ImagesSlider;
