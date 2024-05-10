import logger from "../utils/logger.js";


const logError = (error) => { logger.error(["Error", error]); };
const logInstall = () => { logger.info(["Install", `Addon Installed`]); };
const logExpress = () => { logger.info(["Express", `Express Connected`]); };
const logDownload = (subtitleID) => { logger.info(["Download", `subtitleID=${subtitleID}`]); };
const logWatch = (imdbID, season, episode) => { logger.info(["Watch", `imdbID=${imdbID}, season=${season}, episode=${episode}`]); };

const loggerService = {
    logError,
    logInstall,
    logExpress,
    logDownload,
    logWatch,
}


export default loggerService;