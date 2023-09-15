import React, { useRef, useState } from "react";
import useWindowDimensions from "../../../../../hooks/screenDimentions";
import PhotoGalleryNavigator from "./PhotoGalleryNavigator";
import ImagesSlider from "./PhotoGalleryImagesSlider";
import { data } from "../../../../../data/photoGallery";
import { motion } from "framer-motion";
import ComponentTitle from "../../../../../components/UI/ComponentTitle";
const PhotoGalleryT1 = () => {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState(0);
  const insideSliderRef = useRef();
  const navSliderRef = useRef();

  return (
    <div className="overflow-hidden">
      <ComponentTitle title={"Photo Gallery"} />
      <div
        style={{ width: width, maxWidth: "1920px" }}
        className="lg:grid lg:grid-cols-12 gap-1"
      >
        <div className="col-span-4">
          <PhotoGalleryNavigator
            selected={selected}
            setSelected={setSelected}
            insideSliderRef={insideSliderRef}
            navSliderRef={navSliderRef}
          />
        </div>
        <div className="col-span-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            key={selected}
            style={{
              maxWidth: "1920px",
            }}
            className="max-lg:mt-8"
          >
            <ImagesSlider
              imgs={data.navBtns[selected].imgs}
              insideSliderRef={insideSliderRef}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryT1;
