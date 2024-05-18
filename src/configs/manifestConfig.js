import baseConfig from "./baseConfig.js";


const manifestConfig = {
  id: "universal-hebrew-subtitles",
  version: "3.0.4",

  catalogs: [],
  resources: ["subtitles"],
  types: ["movie", "series"],

  name: "Universal Hebrew Subtitles",
  description: "Enjoy Hebrew subtitles from all the top notch websites in one convenient location.",
  logo: `${baseConfig.BASE_URL}/static/icon/icon.svg`,

  contactEmail: "Nitzantomer1998@gmail.com",

  behaviorHints: {
    configurable: true
  },
};


export default manifestConfig;