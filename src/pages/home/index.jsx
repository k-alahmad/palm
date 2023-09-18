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
import Head from "../../components/Layout/Head";
const Home = () => {
	return (
		<>
			<Head
				title={"Palm Jebel ALI"}
				desc={
					"Palm Jebel Ali, Dubai's epitome of luxury and innovation. Explore investment opportunities and a unique lifestyle, boasting 110 km of coastline and eco-friendly amenities."
				}
				canonicalLink={"/"}
				keywords={
					"Palm Jebel Ali, Dubai luxury island, Investment prospects, Unique lifestyle, 110 km coastline, Eco-friendly project, Sustainability commitment, 80 hotels and resorts, Seamless connectivity, Gateway bridges, AVA Real Estate, Nakheel, Palm Jumeirah, Dubai artificail islands, Dubai new palm, size of new palm, twice the size of palm jumeirah, hh sheikh mohammed bin rashid al maktoum palm jebel ali, Villas, Plot, Apartments, Off plan, water front, Sohba, Emaar, townhouse, Meraas, Dubai property, investment, Dubai Real Estate"
				}
			/>
			<Header />
			<PaymentPlan />
			<div
				className={`${
					systemSettings.backgroudLines
						? "bg-primary bg-t3Pattern bg-no-repeat bg-cover bg-center"
						: systemSettings.palmPattern &&
						  "bg-primary  bg-no-repeat bg-cover bg-center"
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
