import React, { useState } from "react";
import Slider from "react-slick";
import { data } from "../../../../../data/photoGallery";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import useWindowDimensions from "../../../../../hooks/screenDimentions";
import { useLocation } from "react-router-dom";
const PhotoGalleryImagesSlider = ({ sliderRef }) => {
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);
  function SampleNextArrow({ onClick }) {
    return (
      <div
        className="absolute bg-transparent backdrop-blur-[200px] cursor-pointer z-30 right-[2%] bottom-[50%] rounded-full"
        onClick={onClick}
      >
        <FaAngleRight className="text-primary text-[40px]" />
      </div>
    );
  }
  function SamplePrevArrow({ onClick }) {
    return (
      <div
        className="absolute bg-transparent backdrop-blur-[200px] cursor-pointer z-30 left-[2%] bottom-[50%] rounded-full"
        onClick={onClick}
      >
        <FaAngleLeft className="text-primary text-[40px]" />
      </div>
    );
  }
  return (
    <div
      style={{
        width: width - (width * 0.1) / 100,
        maxWidth: "1920px",
      }}
      className="pb-10"
    >
      <Slider
        ref={sliderRef}
        vertical
        verticalSwiping={false}
        arrows={false}
        touchMove={false}
        className="h-full max-h-[400px] sm:max-h-[600px] lg:max-h-[800px] overflow-y-hidden w-full"
        centerMode
        centerPadding=""
        slidesToShow={1}
        slidesToScroll={1}
        rows={1}
        slidesPerRow={1}
      >
        {data.navBtns.map((item, i) => {
          return (
            <Slider
              key={i}
              touchMove
              arrows={true}
              infinite
              centerMode={false}
              dots={false}
              slidesToScroll={1}
              className="w-full h-full"
              nextArrow={<SampleNextArrow />}
              prevArrow={<SamplePrevArrow />}
              beforeChange={(prev, next) => setCurrentSlide(next)}
            >
              {item.imgs.map((item, idx) => {
                return (
                  <div
                    className="relative outline-none flex flex-col justify-center items-center h-[400px] sm:h-[500px] lg:h-[800px]"
                    key={idx}
                  >
                    <img
                      src={item.img}
                      className={`h-full w-full object-cover transition-all duration-500`}
                      alt={"Gallery " + idx}
                    />
                    <div
                      className={`${
                        currentSlide == idx ? "scale-100" : "scale-0"
                      } transition-all duration-500 flex justify-center items-center absolute p-4 lg:p-8 z-40 bg-white/40 backdrop-blur-[10px] text-primary text-center text-2xl rounded-2xl max-md:w-[90%] bottom-[2%] md:bottom-[10%] left-1/2 transform -translate-x-1/2`}
                    >
                      <p className="w-full md:w-3/4 ">
                        {
                          item.text.find(
                            (x) => x.lng == location.pathname.substring(1)
                          )?.value
                        }
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          );
        })}
      </Slider>
    </div>
  );
};

export default PhotoGalleryImagesSlider;
