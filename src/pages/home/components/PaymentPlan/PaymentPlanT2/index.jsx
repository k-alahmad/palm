import React, { useState } from "react";
import PaymentPlanCard from "./PaymentPlanCard";
import { data } from "../../../../../data/paymentPlanData";
import ComponentTitle from "../../../../../components/UI/ComponentTitle";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
const PaymentPlanT2 = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      console.log("swipe", isLeftSwipe ? "left" : "right");
    if (isLeftSwipe) {
      setSelected(selected < 2 ? selected + 1 : 0);
    }
    if (isRightSwipe) {
      setSelected(selected > 0 ? selected - 1 : 2);
    }
  };
  const [selected, setSelected] = useState(1);
  return (
    <div className="px-[5%] lg:px-[10%]">
      <ComponentTitle title={"Payment Plans"} />
      <div className="flex flex-row justify-center items-center max-lg:h-[340px] lg:h-[550px] relative">
        {data.plans.map((item, index) => {
          return (
            <div
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className={`transition-all duration-500 border-none outline-none absolute ${
                selected == index
                  ? "scale-[0.9] lg:scale-125 z-20"
                  : selected > index && index + 1 == selected
                  ? "scale-75 lg:scale-100 -translate-x-[15%] sm:-translate-x-[60%] lg:-translate-x-[115%] xl:-translate-x-[120%]"
                  : selected > index && index + 1 !== selected
                  ? "scale-75 lg:scale-100 translate-x-[15%] sm:translate-x-[60%] lg:translate-x-[115%] xl:translate-x-[120%]"
                  : selected < index && index - 1 == selected
                  ? "scale-75 lg:scale-100 translate-x-[15%] sm:translate-x-[60%] lg:translate-x-[115%] xl:translate-x-[120%]"
                  : selected < index &&
                    index - 1 !== selected &&
                    "scale-75 lg:scale-100 -translate-x-[15%] sm:-translate-x-[60%] lg:-translate-x-[115%] xl:-translate-x-[120%]"
              }`}
              onClick={() => setSelected(index)}
              key={index}
            >
              <PaymentPlanCard
                title={item.title}
                subTitle={item.subtitle}
                selected={selected == index}
                features={item.feature}
                percent={item.percent}
              />
            </div>
          );
        })}

        <MdArrowBackIos
          onClick={() => {
            setSelected(selected > 0 ? selected - 1 : 2);
          }}
          className="text-[#f19148] text-bigger absolute -left-1 top-[50%] sm:max-lg:-left-4 lg:max-2xl:-left-24 cursor-pointer xl:hover:scale-125 transition-all duration-500"
        />

        <MdArrowForwardIos
          onClick={() => {
            setSelected(selected < 2 ? selected + 1 : 0);
          }}
          className="text-[#f19148] text-bigger absolute -right-3 top-[50%] sm:max-lg:-right-5 lg:max-2xl:-right-24 cursor-pointer xl:hover:scale-125 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default PaymentPlanT2;
