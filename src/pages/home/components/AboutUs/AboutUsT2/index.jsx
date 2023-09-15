import React from "react";
import image from "../../../../../assets/images/External/1.webp";
import { data } from "../../../../../data/aboutUsData";
import { useLocation } from "react-router-dom";
const AboutUsT2 = () => {
  const location = useLocation();
  return (
    <div className="mt-20 text-third py-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16 2xl:gap-24  max-lg:space-y-12">
        <div className="col-span-7 px-[10%] flex flex-col lg:justify-center lg:items-start text-smaller md:text-small font-normal text-center lg:text-start ">
          <p className="font-bold text-big md:text-huge  drop-shadow-2xl">
            {
              data.title.find((x) => x.lng == location.pathname.substring(1))
                ?.value
            }
          </p>
          <br />

          {data.sections.map((item, index) => {
            return (
              <div key={index}>
                <p>
                  {
                    item.text.find(
                      (x) => x.lng == location.pathname.substring(1)
                    )?.value
                  }
                </p>
                <br />
              </div>
            );
          })}
        </div>
        <div className="col-span-5 flex justify-center items-center relative">
          <div className="absolute -top-[1px] -left-[1px] w-0 h-0 bg-transparent border-solid border-t-[150px] border-r-[150px] border-l-transparent border-r-transparent border-t-primary z-10" />
          <img
            src={image}
            alt="About us"
            className="object-cover w-full lg:h-full h-[600px] md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsT2;
