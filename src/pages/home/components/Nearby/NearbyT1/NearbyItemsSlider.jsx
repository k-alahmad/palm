import React, { useState } from "react";
import { data } from "../../../../../data/nearbyData";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const NearbyItemsSlider = ({ selectedIndex, setSelectedIndex }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  function SampleNextArrow({ onClick }) {
    return (
      <div
        className="absolute cursor-pointer z-30 right-[40%] -bottom-[15%] rounded-full "
        onClick={onClick}
      >
        <MdArrowForwardIos className="text-secondary text-[30px]" />
      </div>
    );
  }
  function SamplePrevArrow({ onClick }) {
    return (
      <div
        className="absolute cursor-pointer z-30 left-[40%] -bottom-[15%] rounded-full"
        onClick={onClick}
      >
        <MdArrowBackIos className="text-secondary text-[30px]" />
      </div>
    );
  }
  var settings = {
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          slidesPerRow: 3,
          slidesToScroll: 4,
        },
      },

      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 532,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
    dots: false,
    touchMove: true,
    infinite: false,
    speed: 500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const GridElement = ({ icon, name, duration, onClick, index }) => {
    return (
      <div
        onClick={onClick}
        dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
        className={`bg-secondary mb-6 text-primary p-6 xl:p-4 h-36 rounded flex flex-col justify-center items-start space-y-1 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-secondary/40 hover:bg-secondary/90 mx-2 xl:mx-1 ${
          index == selectedIndex
            ? "bg-secondary/70 shadow-lg shadow-secondary/40"
            : ""
        }`}
      >
        <img src={icon} alt="Grid Image" className="h-10 w-10 " />
        <p className="text-smaller font-semibold"> {name}</p>
        <p className="font-extralight text-tiny"> {duration} </p>
      </div>
    );
  };
  return (
    <Slider {...settings} className="w-[95%] xl:w-full ">
      {data.locations.map((e, i) => {
        return (
          <GridElement
            key={i}
            icon={e.icon}
            name={
              e.name.find((x) => x.lng == location.pathname.substring(1))?.value
            }
            duration={e.duration + t("minutes")}
            onClick={() => {
              setSelectedIndex(i);
            }}
            index={i}
          />
        );
      })}
    </Slider>
  );
};

export default NearbyItemsSlider;
