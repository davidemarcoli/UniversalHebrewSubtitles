import db from "../configs/dbConfig.js";
import addonInstallsQuery from "../queries/addonInstallsQuery.js";
import downloadedContentQuery from "../queries/downloadedContentQuery.js";
import watchedContentQuery from "../queries/watchedContentQuery.js";


const insertAddonInstall = async () => { db.query(addonInstallsQuery.insertInstall); };
const insertDownloadedContent = async (source, imdbID, season, episode) => { db.query(downloadedContentQuery.insertDownload, [source, imdbID, season, episode]); };
const insertWatchedContent = async (imdbID, season, episode) => { db.query(watchedContentQuery.insertWatch, [imdbID, season, episode]); };

const dbService = {
    insertAddonInstall,
    insertDownloadedContent,
    insertWatchedContent,
};


export default dbService;