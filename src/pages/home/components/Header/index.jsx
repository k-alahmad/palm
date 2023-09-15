import React, { lazy } from "react";
import { systemSettings } from "../../../../settings";
const HeaderComponent =
  systemSettings.header.status &&
  (systemSettings.header.template == 1
    ? lazy(() => import("./HeaderT1"))
    : systemSettings.header.template == 2
    ? lazy(() => import("./HeaderT2"))
    : systemSettings.header.template == 3 && lazy(() => import("./HeaderT3")));
const Header = () => {
  return (
    HeaderComponent && (
      <div id="home">
        <HeaderComponent />
      </div>
    )
  );
};

export default Header;
