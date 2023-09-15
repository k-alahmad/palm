import React from "react";
import { useLocation } from "react-router-dom";

const PaymentPlanCard = ({ title, subTitle, features, selected, percent }) => {
  const location = useLocation();
  return (
    <div className="flex justify-center items-center w-full cursor-pointer">
      <div
        className={`bg-gradient-to-b from-third to-primary shadow-2xl transition-all duration-500 h-[450px] xl:h-[500px] w-[300px] text-white rounded-[60px] rounded-tr-none flex flex-col justify-evenly items-center font-semibold text-center`}
      >
        <div className="space-y-1">
          <p className="font-bold text-med">
            {title.find((x) => x.lng == location.pathname.substring(1))?.value}
          </p>
          <p className="font-semibold text-small">
            {
              subTitle.find((x) => x.lng == location.pathname.substring(1))
                .value
            }
          </p>
        </div>
        <div
          className={`${
            selected ? "bg-fifth shadow-lg" : "bg-fifth/70 text-white/90"
          }  h-[100px] w-[100px] rounded-tl-full rounded-bl-full rounded-br-full flex flex-col justify-center items-center transition-all duration-500`}
        >
          <p className="font-bold text-small drop-shadow-2xl"> {percent}</p>
        </div>
        <div className="space-y-3 w-[200px]">
          {features.map((item, index) => {
            return (
              <p className="font-semibold text-smaller" key={index}>
                {
                  item?.text?.find(
                    (x) => x.lng == location.pathname.substring(1)
                  )?.value
                }
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCard;
