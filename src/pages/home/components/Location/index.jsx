import React, { lazy } from "react";
import { systemSettings } from "../../../../settings";
const LocationComponent =
  systemSettings.siteLocation.status && lazy(() => import("./LocationT1"));
const Location = () => {
  return (
    LocationComponent && (
      <div id="location">
        <LocationComponent />
      </div>
    )
  );
};

export default Location;
