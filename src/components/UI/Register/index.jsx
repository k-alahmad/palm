import React, { lazy } from "react";
import { systemSettings } from "../../../settings";
const RegisterComponent =
	systemSettings.register.status &&
	(systemSettings.register.template == 1
		? lazy(() => import("./RegisterT1"))
		: systemSettings.register.template == 2
		? lazy(() => import("./RegisterT2"))
		: systemSettings.register.template == 3 &&
		  lazy(() => import("./RegisterT3")));

const Register = ({ modal }) => {
	return (
		RegisterComponent && (
			<div id='contactus'>
				<RegisterComponent modal={modal} />
			</div>
		)
	);
};

export default Register;
