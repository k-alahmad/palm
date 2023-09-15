import React, { lazy } from "react";
import { systemSettings } from "../../../../settings";
const NearbyComponent =
  systemSettings.nearby.status &&
  (systemSettings.nearby.template == 1
    ? lazy(() => import("./NearbyT1"))
    : systemSettings.nearby.template == 2
    ? lazy(() => import("./NearbyT2"))
    : systemSettings.nearby.template == 3 && lazy(() => import("./NearbyT3")));
const Nearby = () => {
  return (
    NearbyComponent && (
      <div id="nearby">
        <NearbyComponent />
      </div>
    )
  );
};

export default Nearby;
