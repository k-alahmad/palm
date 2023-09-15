import React from "react";
import { useTranslation } from "react-i18next";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  selectDownloadState,
  selectRegisterState,
  selectCounterState,
} from "../../../../redux/modal.slice";
import { data } from "../../../../data/registerData";
import RegisterForm from "../../../Forms/RegisterForm";
import { systemSettings } from "../../../../settings";
const SocialElement = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-12 h-12 text-big flex justify-center items-center rounded-sm">
        {icon}
      </div>
      <p className="font-bold text-base text-third">{name}</p>
    </div>
  );
};

function RegisterT2({ modal }) {
  const { i18n, t } = useTranslation();
  const downloadState = useSelector(selectDownloadState);
  const registerState = useSelector(selectRegisterState);
  const counterState = useSelector(selectCounterState);

  return (
    <div
      dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
      className={`md:grid ${
        !modal ? "md:grid-cols-12" : "md:grid-cols-8"
      }  bg-white`}
    >
      {downloadState && !registerState && modal && (
        <div className="col-span-12 text-big lg:text-bigger font-bold text-red-800 flex justify-center items-center">
          {t(data.brochureMessage)}
        </div>
      )}
      {/* {counterState && !registerState && !downloadState && modal && (
          <div className="col-span-12 text-big lg:text-bigger font-bold text-red-800 flex justify-center items-center">
            Please Register to view all Rooms
          </div>
        )} */}
      <div className="col-span-6 md:col-span-4 py-1 md:w-[90%] justify-self-center max-md:hidden">
        <RegisterForm />
      </div>
      <div
        className={`col-span-6 md:col-span-4 space-y-8 flex flex-col bg-secondary relative px-2 py-5 max-md:mx-`}
      >
        {!modal && (
          <div className="absolute -top-[1px] -right-[0px] w-0 h-0 bg-transparent border-solid border-t-[100px] border-r-[100px] border-l-transparent border-r-transparent border-t-primary z-10 rotate-90" />
        )}
        {!modal && (
          <div className="absolute -bottom-[1px] -left-[0px] w-0 h-0 bg-transparent border-solid border-t-[100px] border-r-[100px]  border-l-transparent border-r-transparent border-t-primary max-md:border-t-third z-10 -rotate-90" />
        )}
        <p
          className={`font-bold text-bigger xl:text-huge text-third w-[80%] ${
            modal && "self-center"
          }`}
        >
          {t(data.slogan)}
        </p>
        <p className="font-regular text-med text-third/80 w-[80%] self-center">
          {t(data.subTitle)}
        </p>
        <div className={`w-[80%]  ${!modal ? "self-end" : "self-center"}`}>
          <SocialElement
            icon={<MdLocationOn className="text-third" />}
            name={t(data.address)}
          />
        </div>
      </div>
      <div className="col-span-6 p-3 md:w-[90%] justify-self-center md:hidden">
        <RegisterForm />
      </div>
      {!modal && (
        <div className={`md:col-span-4 max-md:hidden `}>
          <img
            src={data.photo}
            alt="Register Image"
            className={`w-full h-[370px] sm:h-full 
            } object-cover object-center`}
          />
        </div>
      )}
    </div>
  );
}

export default RegisterT2;
