// Note for Kanaan, this is the setting that allow us to control the look of the landing page
// We now have two templates: [1 and 2], try to change each one by itself and have fun !!

// jlt settings
// export const systemSettings = {
//   darkMode: false,
//   gridLines: false, // split landing page to lines
//   availableLanguages: [{ lng: "en", name: "English" }],
//   // availableLanguages: [{ lng: "en", name: "English", }, { lng: "ar", name: "العربية" }, { lng: "fa", name: "فارسی" }]
//   registerModal: { status: true, popUpModalStartTime: 10000 },
//   colors: {
//     light: {
//       bg: "transparent",
//       primary: "#05AAE0",
//       secondary: "white",
//       third: "#2980B9",
//       fourth: "#1F5061",
//       fifth: "#f19148",
//     },
//     dark: {
//       bg: "#1B1724",
//       primary: "#05AAE0",
//       secondary: "#2980B9",
//       third: "white",
//       fourth: "#1F5061",
//       fifth: "#f19148",
//     },
//   },
//   navbar: { status: true, template: 2 },
//   header: { status: true, template: 2 },
//   paymentPlan: { status: true, template: 2 },
//   about: { status: true, template: 2 },
//   photoGallery: { status: true, template: 2 },
//   siteLocation: { status: false, template: 2 },
//   floorPlan: { status: true, template: 2 },
//   nearby: { status: true, template: 2 },
//   register: { status: true, template: 2 },
//   brochure: { status: false, template: 1 },
//   footer: { status: true },
// };

export const systemSettings = {
  darkMode: false,
  gridLines: false, // split landing page to lines
  backgroudLines: true,
  // availableLanguages: [{ lng: "en", name: "English" }],
  availableLanguages: [
    { lng: "en", name: "English" },
    { lng: "ru", name: "Russian" },
    // { lng: "ar", name: "العربية" },
    // { lng: "fa", name: "فارسی" },
  ],
  //primary: "#1B1724",secondary: "#05AAE0",
  registerModal: { status: true, popUpModalStartTime: 10000 },
  colors: {
    light: {
      bg: "transparent",
      primary: "#1B1724",
      secondary: "#BC9837",
      third: "white",
      fourth: "rgba(131, 131, 131, 1)",
      fifth: "#0C769C",
    },
    dark: {
      bg: "#1B1724",
      primary: "#05AAE0",
      secondary: "#2980B9",
      third: "white",
      fourth: "#1F5061",
      fifth: "#f19148",
    },
  },
  navbar: { status: true, template: 2 },
  header: { status: true, template: 3 },
  paymentPlan: { status: true, template: 3 },
  about: { status: true, template: 2 },
  photoGallery: { status: true, template: 2 },
  siteLocation: { status: false, template: 3 },
  floorPlan: { status: true, template: 3 },
  nearby: { status: true, template: 3 },
  register: { status: true, template: 2 },
  brochure: { status: false, template: 3 },
  footer: { status: true },
};
// ----- 330 Settings -----
// export const systemSettings = {
//   darkMode: false,
//   gridLines: true, // split landing page to lines
//   availableLanguages: [
//     { lng: "en", name: "English" },
//     { lng: "ar", name: "العربية" },
//     { lng: "fa", name: "فارسی" },
//   ],
//   registerModal: { status: true, popUpModalStartTime: 3000 },
//   colors: {
//     light: {
//       bg: "transparent",
//       primary: "#222",
//       secondary: "white",
//       third: "#F0F0F0",
//       fourth: "#9E9E9E",
//       fifth: "#B28A5D",
//     },
//     dark: {
//       bg: "#222",
//       primary: "white",
//       secondary: "#222",
//       third: "#F0F0F0",
//       fourth: "#9E9E9E",
//       fifth: "#B28A5D",
//     },
//   },
//   navbar: { status: true, template: 1 },
//   header: { status: true, template: 1 },
//   paymentPlan: { status: true, template: 1 },
//   about: { status: false, template: 1 },
//   photoGallery: { status: false, template: 1 },
//   siteLocation: { status: true, template: 1 },
//   floorPlan: { status: true, template: 1 },
//   nearby: { status: true, template: 1 },
//   register: { status: true, template: 1 },
//   brochure: { status: true, template: 1 },
//   footer: { status: true },
// };

export default systemSettings.darkMode
  ? systemSettings.colors.dark
  : systemSettings.colors.light; // this is for tailwind since it only works with export default (module)
