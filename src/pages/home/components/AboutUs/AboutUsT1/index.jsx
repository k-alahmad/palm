import React from "react";
import ComponentTitle from "../../../../../components/UI/ComponentTitle";
import image from "../../../../../assets/images/External/1.webp";
import { data } from "../../../../../data/aboutUsData";
import { useLocation } from "react-router-dom";
const AboutUsT1 = () => {
  const location = useLocation();
  return (
    <div className="mt-16">
      <ComponentTitle title={"Why JLT"} />
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16 2xl:gap-24 px-[5%] max-lg:space-y-12">
        <div className="col-span-5 flex justify-center items-center">
          <img
            src={image}
            alt="About us"
            className="object-cover rounded-[60px] rounded-tr-none shadow-2xl drop-shadow-2xl w-full lg:h-full  h-[400px] md:h-[500px]"
          />
        </div>
        <div className="col-span-7 flex flex-col lg:justify-start lg:items-start text-smaller md:text-small font-semibold text-center lg:text-start ">
          <p className="font-bold text-big md:text-huge text-third drop-shadow-2xl">
            {
              data.title.find((x) => x.lng == location.pathname.substring(1))
                .value
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
      </div>
    </div>
  );
};

export default AboutUsT1;
