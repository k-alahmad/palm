import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  downloadBrochure,
  selectRegisterState,
  showModal,
} from "../../../redux/modal.slice";
import Register from "../../UI/Register";
import { systemSettings } from "../../../settings";
import { data } from "../../../data/brochureData";
const Brochure = () => {
  const brochureData = data.find(
    (d) => d.template == systemSettings.brochure.template
  );
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const registerState = useSelector(selectRegisterState);
  return (
    <div
      className="bg-primary w-full flex flex-col justify-center items-center"
      dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
    >
      <img
        src={brochureData.photo}
        alt="Brochure"
        className="h-[400px] w-[300px] object-fill col-start-4 col-span-2 -mt-44 lg:hidden"
      />
      <div className="text-secondary lg:grid lg:grid-cols-5 max-lg:py-4 px-[10%]">
        <div
          className="self-center space-y-2 col-span-2"
          dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
        >
          <p className="font-bold text-med md:text-big xl:text-huge">
            {t(brochureData.title)}
          </p>
          <button
            className="bg-secondary rounded-md font-bold p-2 text-lg hover:bg-fourth transition-all duration-300 text-primary w-full lg:w-[280px]"
            onClick={() => {
              if (registerState) {
                let alink = document.createElement("a");
                alink.href = brochureData.file;
                alink.download = "BrochurePdf.pdf";
                alink.click();
              } else {
                dispatch(downloadBrochure());
                systemSettings.registerModal.status &&
                  dispatch(showModal({ data: <Register modal={true} /> }));
              }
            }}
          >
            {t("download")}
          </button>
        </div>
        <img
          src={brochureData.photo}
          alt="Brochure"
          className=" object-fill col-start-4 col-span-2 -mt-28 hidden lg:block relative"
        />
      </div>
      <div className="h-[1px] w-full bg-gray-500 relative " />
    </div>
  );
};

export default Brochure;
