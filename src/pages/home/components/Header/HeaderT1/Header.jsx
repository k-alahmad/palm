import React from "react";
import LazyImage from "../../../../../components/UI/LazyImage";
import { data } from "../../../../../data/headerData";
import { useTranslation } from "react-i18next";
import { systemSettings } from "../../../../../settings";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  return (
    <div
      className="max-md:hidden"
      dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
    >
      <div className="grid grid-cols-12">
        <div
          className={`col-span-4 px-[3%] ${
            i18n.language !== "ar" || i18n.language !== "fa"
              ? "translate-x-[3%]"
              : "-translate-x-[3%]"
          } `}
        >
          <div
            dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
            className="px-4 py-8 space-y-4 h-[350px]"
          >
            <p className="text-primary text-huge font-bold capitalize">
              {systemSettings.availableLanguages.length > 1
                ? data.titles[0].find(
                    (title) => title.lng == location.pathname.substring(1)
                  )?.value
                : data.titles[0][0].value}
            </p>
            <p className="text-smaller capitalize  text-fourth pb-28">
              {systemSettings.availableLanguages.length > 1
                ? data.subTitles[0].find(
                    (title) => title.lng == location.pathname.substring(1)
                  )?.value
                : data.subTitles[0][0].value}
            </p>
          </div>
          <div className="flex w-full h-[750px] mt-12">
            <LazyImage
              src={data.images[1]}
              alt={"Hero left"}
              imgStyle={"object-cover h-full animate-camera"}
            />
            <div className="flex absolute right-[20%] -translate-y-1/2 w-[150px] h-[150px] rounded-[150px] bg-gradient-to-b from-fourth/50 backdrop-blur-md" />
          </div>
        </div>
        <div className="col-span-4 px-[5%] relative z-10">
          {systemSettings.darkMode ? (
            <div className="text-huge -mt-10 bg-secondary text-primary text-center font-semibold">
              330 River Side
            </div>
          ) : (
            <div className="z-50">
              <LazyImage
                src={data.images[0]}
                alt={"Riverside"}
                imgStyle={"flex -mt-10 bg-pre p-1"}
              />
            </div>
          )}

          <div className="flex h-[750px] mt-52">
            <LazyImage
              src={data.images[2]}
              alt={"Hero Middle"}
              imgStyle={"relative object-cover h-full animate-camera"}
            />
          </div>
        </div>
        <div
          className={`col-span-4 px-[3%] ${
            i18n.language !== "ar" || i18n.language !== "fa"
              ? "-translate-x-[3%]"
              : "translate-x-[3%]"
          } `}
        >
          <div className="flex w-full h-[750px] mt-32">
            <LazyImage
              src={data.images[3]}
              alt={"Hero Right"}
              imgStyle={"relative object-cover w-[200%] h-full animate-camera"}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div
          className={`col-span-4 px-[3%] ${
            i18n.language !== "ar" || i18n.language !== "fa"
              ? "translate-x-[3%]"
              : "-translate-x-[3%]"
          } `}
        >
          <div
            dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
            className="mt-24 space-y-4 px-4"
          >
            <p className="w-full text-primary text-huge font-bold capitalize leading-[110%] ">
              {systemSettings.availableLanguages.length > 1
                ? data.titles[1].find(
                    (title) => title.lng == location.pathname.substring(1)
                  )?.value
                : data.titles[1][0].value}
            </p>
            <p className="text-smaller capitalize text-fourth ">
              {systemSettings.availableLanguages.length > 1
                ? data.subTitles[1].find(
                    (title) => title.lng == location.pathname.substring(1)
                  )?.value
                : data.subTitles[1][0].value}
            </p>
          </div>
        </div>

        <div className="col-span-8 px-[3%]">
          <div className="h-[800px] relative -translate-y-52">
            <LazyImage
              src={data.images[4]}
              alt={"Hero Bottom One"}
              imgStyle={"relative object-fill h-[800px]"}
            />
            <div className="flex absolute bottom-0 w-[50%] h-[15%] bg-gradient-to-b from-secondary/30 backdrop-blur-sm" />
            <div
              className={`bg-third absolute h-[15%] w-[50%] -top-[1px] ${
                i18n.language !== "ar" || i18n.language !== "fa"
                  ? "left-0"
                  : "right-0"
              }`}
            />
            <div
              className={`bg-third absolute h-[15%] w-[50%] -bottom-[1px] ${
                i18n.language !== "ar" || i18n.language !== "fa"
                  ? "right-0"
                  : "left-0"
              } `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
