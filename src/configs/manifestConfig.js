import baseConfig from "./baseConfig.js";


const manifestConfig = {
  id: "universal-hebrew-subtitles",
  version: "3.0.4",

  catalogs: [],
  resources: ["subtitles"],
  types: ["movie", "series"],

  name: "Universal Hebrew Subtitles",
  description: "Enjoy Hebrew subtitles from all the top notch websites in one convenient location.",
  logo: `${baseConfig.BASE_URL}/icon.svg`,

  contactEmail: "Nitzantomer1998@gmail.com",
};


export default manifestConfig;