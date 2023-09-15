import React from "react";
import { useLocation } from "react-router-dom";
const PaymentPlanCard = ({ title, subTitle, features }) => {
  const location = useLocation();
  return (
    <div className="flex justify-center items-center w-full cursor-pointer">
      <div
        className={`bg-transparent transition-all duration-500   md:gap-x-12  text-primary flex flex-col max-md:space-y-7 md:flex-row justify-evenly items-center font-semibold`}
      >
        <div className="flex flex-col justify-center items-center space-y-4">
          <p className="font-bold text-big text-secondary">
            {
              title?.find(
                (x) => x.lng == location.pathname.toString().substring(1)
              )?.value
            }
          </p>

          <div
            className={`bg-primary shadow-lg w w-[270px] h-[100px] flex flex-col justify-center items-center transition-all duration-500 rounded`}
          >
            <p className="font-bold text-white text-huge drop-shadow-2xl">
              {
                subTitle?.find(
                  (x) => x?.lng == location.pathname.toString().substring(1)
                )?.value
              }
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8 max-md:place-items-center ">
          {features?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col max-md:justify-center max-md:items-center"
              >
                <p className="font-bold text-big">{item?.amount}</p>
                <p className="font-semibold text-base max-md:text-center">
                  {
                    item?.text.find(
                      (x) => x.lng == location.pathname.toString().substring(1)
                    )?.value
                  }
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCard;
