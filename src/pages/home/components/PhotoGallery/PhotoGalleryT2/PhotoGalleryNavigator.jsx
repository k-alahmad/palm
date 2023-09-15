import React from "react";
import { data } from "../../../../../data/photoGallery";
import { useLocation } from "react-router-dom";
const PhotoGalleryNavigator = ({ setSelected, selected, sliderRef }) => {
  const location = useLocation();
  return (
    <div className="grid grid-cols-3 gap-3 xl:gap-x-5 2xl:gap-x-8 bg-third rounded-lg p-1">
      {data.navBtns.map((item, index) => {
        return (
          <button
            onClick={() => {
              setSelected(index);
              sliderRef.current.slickGoTo(index);
            }}
            key={index}
            className={`uppercase h-14 w-28 sm:w-44 px-1 text-primary rounded-lg ${
              selected == index
                ? "bg-secondary text-white"
                : "transition-all duration-500"
            } `}
          >
            {
              item.type.find((x) => x.lng == location.pathname.substring(1))
                ?.value
            }
          </button>
        );
      })}
    </div>
  );
};

export default PhotoGalleryNavigator;
