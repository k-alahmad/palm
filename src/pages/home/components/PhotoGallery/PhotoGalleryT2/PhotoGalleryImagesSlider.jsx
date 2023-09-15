import React from "react";
import Slider from "react-slick";
import { data } from "../../../../../data/photoGallery";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import useWindowDimensions from "../../../../../hooks/screenDimentions";
const PhotoGalleryImagesSlider = ({ sliderRef }) => {
  const { width } = useWindowDimensions();

  function SampleNextArrow({ onClick }) {
    return (
      <div
        className="absolute bg-primary cursor-pointer z-30 right-[2%] bottom-[50%] rounded-full"
        onClick={onClick}
      >
        <MdArrowForward className="text-secondary text-[40px]" />
      </div>
    );
  }
  function SamplePrevArrow({ onClick }) {
    return (
      <div
        className="absolute bg-primary cursor-pointer z-30 left-[2%] bottom-[50%] rounded-full"
        onClick={onClick}
      >
        <MdArrowBack className="text-secondary text-[40px]" />
      </div>
    );
  }
  return (
    <div
      style={{
        width: width - (width * 0.5) / 100,
        maxWidth: "1920px",
      }}
    >
      <Slider
        ref={sliderRef}
        vertical
        verticalSwiping={false}
        arrows={false}
        touchMove={false}
        className="h-full w-full"
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
              dots={false}
              slidesToScroll={1}
              className="w-full h-full"
              nextArrow={<SampleNextArrow />}
              prevArrow={<SamplePrevArrow />}
              responsive={[
                {
                  breakpoint: 10000,
                  settings: {
                    slidesToShow: 3,
                    centerPadding: "100px",
                    centerMode: true,
                  },
                },
                {
                  breakpoint: 1450,
                  settings: {
                    slidesToShow: 2,
                    centerPadding: "100px",
                    centerMode: true,
                  },
                },
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 1,
                    centerPadding: "100px",
                    centerMode: true,
                  },
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                  },
                },
              ]}
            >
              {item.imgs.map((item, idx) => {
                return (
                  <div
                    className="relative outline-none md:px-[5%] h-[400px] sm:h-[500px] "
                    key={i}
                  >
                    <div className="absolute -top-[1px] -left-[1px] w-0 h-0 bg-transparent border-solid border-t-[100px] border-r-[100px] border-l-transparent border-r-transparent border-t-primary z-10" />
                    <img
                      src={item}
                      className="h-full w-full object-fill pb-12"
                      alt={"Gallery " + i}
                    />
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
