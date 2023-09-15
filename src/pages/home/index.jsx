import React from "react";
import Header from "./components/Header";
import PaymentPlan from "./components/PaymentPlan";
import FloorPlan from "./components/FloorPlan";
import Nearby from "./components/Nearby";
import AboutUs from "./components/AboutUs";
import PhotoGallery from "./components/PhotoGallery";
import Location from "./components/Location";
import Register from "../../components/UI/Register";
import { systemSettings } from "../../settings";
const Home = () => {
  return (
    <>
      <Header />
      <PaymentPlan />
      <div
        className={`${
          systemSettings.backgroudLines &&
          "bg-primary bg-t3Pattern bg-no-repeat bg-cover bg-center"
        }`}
      >
        <AboutUs />
        <PhotoGallery />
        <FloorPlan />
        <Nearby />
      </div>
      <Location />
      <Register />
    </>
  );
};
export default Home;
