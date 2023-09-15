import React, { lazy } from "react";
import { systemSettings } from "../../../settings";
const RegisterComponent =
  systemSettings.register.status &&
  (systemSettings.register.template == 1
    ? lazy(() => import("./RegisterT1"))
    : systemSettings.register.template == 2 &&
      lazy(() => import("./RegisterT2")));

const Register = ({ modal }) => {
  return (
    RegisterComponent && (
      <div id="contactus">
        <RegisterComponent modal={modal} />
      </div>
    )
  );
};

export default Register;
