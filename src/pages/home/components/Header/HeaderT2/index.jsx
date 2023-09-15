import React from "react";
import { data } from "../../../../../data/headerData";
import { useTranslation } from "react-i18next";
import HeaderTextSlider from "./HeaderTextSlider";
const HeaderT2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className=" bg-cover bg-right lg:bg-center bg-no-repeat h-[700px] lg:h-[750px] 2xl:h-[1000px] "
      style={{
        backgroundImage: `url(${data.images[6]})`,
      }}
      dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
    >
      <div
        className="h-full w-full bg-cover"
        style={{
          background:
            "radial-gradient(105.51% 436.49% at 97.61% 8.38%, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.25) 100%)",
        }}
      >
        <div
          className="h-full w-full relative"
          style={{
            background:
              "radial-gradient(102.11% 427.34% at 102.11% 200.81%, rgba(0, 0, 0, 0.9) 0%, rgba(76, 169, 223, 0) 0.11%, rgba(76, 169, 223, 0.33) 100%)",
          }}
        >
          <HeaderTextSlider />
          <img
            src={data.images[5]}
            className="w-full absolute -bottom-0"
            alt="Header"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderT2;
