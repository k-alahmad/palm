import React, { lazy } from "react";
import { systemSettings } from "../../../../settings";

const FloorPlanComponent =
  systemSettings.floorPlan.status &&
  (systemSettings.floorPlan.template == 1
    ? lazy(() => import("./FloorPlanT1"))
    : systemSettings.floorPlan.template == 2
    ? lazy(() => import("./FloorPlanT2"))
    : systemSettings.floorPlan.template == 3 &&
      lazy(() => import("./FloorPlanT3")));
const FloorPlan = () => {
  return (
    FloorPlanComponent && (
      <div id="floorPlan">
        <FloorPlanComponent />;
      </div>
    )
  );
};

export default FloorPlan;
