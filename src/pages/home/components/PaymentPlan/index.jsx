import React, { lazy } from "react";
import { systemSettings } from "../../../../settings";
const PaymentPlanComponent =
  systemSettings.paymentPlan.status &&
  (systemSettings.paymentPlan.template == 1
    ? lazy(() => import("./PaymentPlanT1"))
    : systemSettings.paymentPlan.template == 2
    ? lazy(() => import("./PaymentPlanT2"))
    : systemSettings.paymentPlan.template == 3 &&
      lazy(() => import("./PaymentPlanT3")));
const PaymentPlan = () => {
  return (
    PaymentPlanComponent && (
      <div id="payment">
        <PaymentPlanComponent />
      </div>
    )
  );
};

export default PaymentPlan;
