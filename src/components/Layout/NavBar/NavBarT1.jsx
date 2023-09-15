import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Drawer from "./Drawer";
import LinkElement from "./LinkElement";
import Dropdown from "./Language";
import { MdDehaze } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showModal } from "../../../redux/modal.slice";
import { handleScroll } from "../../../helpers/scroll";
import { NavElement } from "../../../data/navData";
import Register from "../../UI/Register";
import { systemSettings } from "../../../settings";
const NavBarT1 = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home");
  const dispatch = useDispatch();

  const listenScrollEvent = (event) => {
    if (document.documentElement.scrollTop < 100) {
      return setHeader(false);
    } else if (document.documentElement.scrollTop > 110) {
      return setHeader(true);
    }
  };
  useEffect(() => {
    setHeader(false);
    document.addEventListener("scroll", listenScrollEvent);
    return () => {
      document.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div
          dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
          className={`${
            header
              ? "shadow-2xl w-[95%] lg:w-[80%] translate-y-2 bg-secondary border-secondary "
              : "w-[95%] translate-y-0 border-transparent "
          }   border-2 transition-all duration-500 z-40 fixed rounded-2xl max-lg:px-3`}
        >
          <div
            className={`flex justify-evenly lg:justify-between items-center h-16`}
          >
            {systemSettings.registerModal.status && (
              <div className="flex flex-1">
                <div
                  className="flex justify-center items-center px-[3%] cursor-pointer"
                  onClick={() =>
                    dispatch(showModal({ data: <Register modal={true} /> }))
                  }
                >
                  <FaPlus className="animate-pulse text-primary" />
                  <p className="text-primary font-normal uppercase p-4 ">
                    {t("register")}
                  </p>
                </div>
              </div>
            )}
            {systemSettings.availableLanguages.length > 1 && <Dropdown />}
            <p className="-mr-6 text-primary max-lg:hidden">{t("menu")}</p>
            <div
              onClick={() => setMobileOpen(true)}
              className=" lg:px-8 block cursor-pointer"
            >
              <MdDehaze size={24} className="text-primary" />
            </div>
          </div>
        </div>
        <div className={`h-24`} />
      </div>
      <Drawer isOpen={mobileOpen} setIsOpen={setMobileOpen}>
        {NavElement.map((e, idx) => (
          <LinkElement
            key={idx}
            name={t(e.name)}
            link={e.link}
            selectedLink={selectedLink}
            onClick={() => {
              setMobileOpen(false);
              handleScroll(e.link);
              setSelectedLink(e.link);
            }}
          />
        ))}
      </Drawer>
    </>
  );
};

export default NavBarT1;
