import React, { lazy } from "react";
import { systemSettings } from "../../../settings";
const NavBarComponent =
  systemSettings.navbar.status &&
  (systemSettings.navbar.template == 1
    ? lazy(() => import("./NavBarT1"))
    : systemSettings.navbar.template == 2 && lazy(() => import("./NavBarT2")));
const NavBar = () => {
  return <NavBarComponent />;
};

export default NavBar;
