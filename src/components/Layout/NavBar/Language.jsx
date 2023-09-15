import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { systemSettings } from "../../../settings";
export default function Dropdown({ textColor }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    navigate(`/${lng}`);
  };
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  const LngElement = ({ lng, name }) => {
    return (
      <div
        className="flex justify-start items-center"
        onClick={() => {
          changeLanguage(lng);
        }}
      >
        <div className="px-2 cursor-pointer text-primary">
          {i18n.language === lng ? (
            <MdRadioButtonChecked size={24} />
          ) : (
            <MdRadioButtonUnchecked size={24} />
          )}
        </div>
        <p className={`${textColor} text-primary cursor-pointer`}>{name}</p>
      </div>
    );
  };
  return (
    <div className="rounded-md">
      <div className="relative">
        <div
          style={{ WebkitTapHighlightColor: "transparent" }}
          className=" p-0 m-0 px-8 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="flex border-r-2 border-fourth">
            <p
              className={`${textColor} block px-2 transition-all duration-500 text-primary`}
            >
              {t("code")}
            </p>
            <IoIosArrowDown
              size={24}
              className={`mx-2 ${textColor} text-primary transition-all duration-500`}
            />
          </div>
        </div>

        <div
          ref={ref}
          onClick={() => setOpen(false)}
          className={`${
            open ? "scale-100" : "scale-0"
          } absolute z-10 mt-4 origin-top bg-secondary rounded-lg shadow-2xl transition-all duration-300 p-4 space-y-2  font-MED text-smaller w-40 border-[1px] border-primary`}
        >
          {systemSettings.availableLanguages.map((item, index) => {
            return <LngElement key={index} lng={item.lng} name={item.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
