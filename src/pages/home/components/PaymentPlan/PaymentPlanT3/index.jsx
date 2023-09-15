import React from "react";
import PaymentPlanCard from "./PaymentPlanCard";
import { data } from "../../../../../data/paymentPlanData";
import { useLocation } from "react-router-dom";
const PaymentPlanT3 = () => {
  const location = useLocation();
  return (
    <div className="px-[5%] lg:px-[10%] mt-16 flex flex-col justify-center items-center">
      {
        <div className="font-bold text-big md:text-huge uppercase text-center drop-shadow-2xl">
          {
            data.title.find((x) => x.lng == location.pathname.substring(1))
              ?.value
          }
        </div>
      }
      <div className="mt-12 space-y-16">
        {data.plans.map((item, index) => {
          return (
            <PaymentPlanCard
              key={index}
              title={item.title}
              subTitle={item.subtitle}
              features={item.feature}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PaymentPlanT3;
