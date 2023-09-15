import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { data } from "../../../../../data/nearbyData";
import { motion } from "framer-motion";
import NearbyContainer from "./NearbyContainer";
import NearbyItemsSlider from "./NearbyItemsSlider";
import { useLocation } from "react-router-dom";

const NearbyT1 = () => {
  const { i18n, t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();
  return (
    <NearbyContainer>
      <div
        className="text-secondary lg:grid lg:grid-cols-12 h-full"
        dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
      >
        <div
          className="lg:px-10 xl:px-16 col-span-5 py-7 max-lg:px-8"
          dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
        >
          <p className="font-bold text-huge">
            {
              data.title.find((x) => x.lng == location.pathname.substring(1))
                .value
            }
          </p>
          <p className="text-secondary/60 font-regular text-small">
            {
              data.subTitle.find((x) => x.lng == location.pathname.substring(1))
                .value
            }
          </p>
          <div className="py-5 lg:py-16 flex justify-center items-center">
            <NearbyItemsSlider
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
        </div>
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className="col-start-6 col-span-7"
        >
          <img
            src={data.locations[selectedIndex].img}
            alt="Nearby Image"
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </NearbyContainer>
  );
};

export default NearbyT1;
