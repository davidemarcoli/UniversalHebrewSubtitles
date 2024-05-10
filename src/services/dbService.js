import db from "../configs/dbConfig.js";
import addonInstallsQuery from "../queries/addonInstallsQuery.js";
import downloadedContentQuery from "../queries/downloadedContentQuery.js";
import watchedContentQuery from "../queries/watchedContentQuery.js";


const insertAddonInstall = () => { db.query(addonInstallsQuery.insertInstall); };
const insertDownloadedContent = (imdbID, season, episode) => { db.query(downloadedContentQuery.insertDownload, [imdbID, season, episode]); };
const insertWatchedContent = (imdbID, season, episode, contentType) => { if (["series", "movie"].includes(contentType)) db.query(watchedContentQuery.insertWatch, [imdbID, season, episode]); };

const dbService = {
    insertAddonInstall,
    insertDownloadedContent,
    insertWatchedContent,
};


export default dbService;