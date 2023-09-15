import { systemSettings } from "../settings";
export const NavElement = [];
systemSettings.header.status && NavElement.push({ name: "home", link: "home" });
systemSettings.paymentPlan.status &&
	NavElement.push({ name: "Payment", link: "payment" });
systemSettings.about.status &&
	NavElement.push({ name: "About project", link: "about" });
systemSettings.photoGallery.status &&
	NavElement.push({ name: "Gallery", link: "gallery" });
systemSettings.floorPlan.status &&
	NavElement.push({ name: "Floor Plan", link: "floorPlan" });
systemSettings.nearby.status &&
	NavElement.push({ name: "Nearby", link: "nearby" });
systemSettings.siteLocation.status &&
	NavElement.push({ name: "Location", link: "location" });
systemSettings.register.status &&
	NavElement.push({ name: "Contact Us", link: "contactus" });
