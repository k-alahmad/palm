import React from "react";
import { data } from "../../../../../data/aboutUsData";
import { useLocation } from "react-router-dom";
const AboutUsT3 = () => {
  const location = useLocation();
  return (
    <div className="pt-20 text-third py-24 px-[5%]">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16 2xl:gap-24  max-lg:space-y-12">
        <div className="col-span-6 flex flex-col lg:justify-center lg:items-start text-smaller md:text-small font-normal text-center lg:text-start ">
          <p className="font-bold text-big md:text-huge drop-shadow-2xl">
            {
              data.title.find((x) => x.lng == location.pathname.substring(1))
                ?.value
            }
          </p>
          <br />

          {data.sections.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-justify">
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
        <div className="col-span-6 flex justify-center items-center ">
          <img
            src={data.image}
            alt="About us"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsT3;
