import React, { lazy, useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Brochure from "../Brochure/index";
import useWindowDimensions from "../../../hooks/screenDimentions";
import { showModal } from "../../../redux/modal.slice";
import { useDispatch } from "react-redux";
import Modal from "../../UI/Modal/Modal";
import { systemSettings } from "../../../settings";
import Register from "../../UI/Register";
const PageLayout = ({ children, type }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { width } = useWindowDimensions();
  const [w, setW] = useState(width);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  useEffect(() => {
    if (systemSettings.availableLanguages.length > 1) {
      systemSettings.availableLanguages.map((item) => {
        if (location.pathname == `/${item.lng}`) changeLanguage(item.lng);
      });
      if (location.pathname == "/") {
        navigate(`/${i18n.language}`);
      }
    }
  }, [location.pathname]);
  useEffect(() => {
    if (width !== w) {
      window.location.reload();
    }
    setW(width);
  }, [width]);

  useEffect(() => {
    if (systemSettings.registerModal.status) {
      setTimeout(() => {
        dispatch(showModal({ data: <Register modal={true} /> }));
      }, systemSettings.registerModal.popUpModalStartTime);
    }
  }, []);
  return (
    <div className=" flex flex-col justify-center items-center bg-mainBg overflow-x-hidden">
      <NavBar />
      <div className="min-h-screen w-full max-w-[1920px]">
        {systemSettings.gridLines ? (
          <div className="relative grid grid-cols-12 h-[5980px] sm:h-[6190px] md:h-[7440px] lg:h-[5580px] xl:h-[5440px] 2xl:h-[5600px] border-t-[1px] border-gray-200 mt-6">
            <div className="border-r-[1px] border-l-[1px] border-gray-200 col-span-4" />
            <div className="border-r-[1px] border-gray-200 col-span-4" />
            <div className="border-r-[1px] border-gray-200 col-span-4" />
            <div className="absolute w-full h-full">{children}</div>
          </div>
        ) : (
          children
        )}
      </div>
      {systemSettings.brochure.status && <Brochure />}
      {systemSettings.footer.status && <Footer />}
      <Modal />
    </div>
  );
};

export default PageLayout;
