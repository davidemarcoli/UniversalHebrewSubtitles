import manifestConfig from "../configs/manifestConfig.js";
import dbService from "../services/dbService.js";
import loggerService from "../services/loggerService.js";
import stremioService from "../services/stremioService.js";
import extractData from "../utils/dataExtractor.js";


const getIcon = (req, res) => { res.sendFile("icon.svg", { root: "./public/icon" }); };

const getManifest = async (req, res) => {
  loggerService.logInstall();
  // dbService.insertAddonInstall();

  res.send(manifestConfig);
};

const getSubtitleSrt = async (req, res) => {
  const { source, imdbID, season, episode, subtitleID } = req.params;

  loggerService.logDownload(subtitleID);
  // dbService.insertDownloadedContent(source, imdbID, season, episode);

  const srtContent = await stremioService.getSubtitleSrt(source, subtitleID);

  res.send(srtContent);
};

const getSubtitlesList = async (req, res) => {
  const { imdbID, season, episode, filename } = extractData(req.params);

  loggerService.logWatch(imdbID, season, episode);
  // dbService.insertWatchedContent(imdbID, season, episode);

  const stremioSubtitles = await stremioService.getSubtitlesList(imdbID, season, episode);
  const sortedSubtitles = stremioService.sortSubtitlesByFilename(stremioSubtitles, filename);

  res.send({ subtitles: sortedSubtitles });
};

const stremioController = {
  getIcon,
  getManifest,
  getSubtitleSrt,
  getSubtitlesList,
};


export default stremioController;