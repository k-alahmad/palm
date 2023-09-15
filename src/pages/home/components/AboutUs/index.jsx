import React, { lazy } from "react";
import { systemSettings } from "../../../../settings";
const AboutUsComponent =
  systemSettings.about.status &&
  (systemSettings.about.template == 1
    ? lazy(() => import("./AboutUsT1"))
    : systemSettings.about.template == 2 && lazy(() => import("./AboutUsT2")));
const AboutUs = () => {
  return (
    AboutUsComponent && (
      <div id="about">
        <AboutUsComponent />
      </div>
    )
  );
};

export default AboutUs;
