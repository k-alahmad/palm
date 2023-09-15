import React from "react";
import { publicRoutes } from "./routesLists";
import PageLayout from "../components/Layout/PageContainer";
import { Route, Routes } from "react-router-dom";
const withRoute = (routes) => {
  return routes.map((route) => (
    <Route path={route.path} element={<route.element />} key={route.path} />
  ));
};

function Router() {
  return (
    <PageLayout>
      <Routes>
        <Route>{withRoute(publicRoutes)}</Route>
      </Routes>
    </PageLayout>
  );
}
export default Router;
