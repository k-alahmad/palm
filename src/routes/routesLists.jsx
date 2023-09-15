import { lazy } from "react";
const home = lazy(() => import("../pages/home/index.jsx"));
const thankYou = lazy(() => import("../pages/thankYou/index.jsx"));
import { systemSettings } from "../settings";

const homeRoutes = systemSettings.availableLanguages.map((item) => {
  return {
    path: `/${item.lng}`,
    element: home,
  };
});
export const publicRoutes = [
  ...homeRoutes,
  {
    path: "/thankyou",
    element: thankYou,
  },
  {
    path: "*",
    element: home,
  },
];

export const protectedRoutes = [];
