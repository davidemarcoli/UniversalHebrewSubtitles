import manifestConfig from "../configs/manifestConfig.js";
import dbService from "../services/dbService.js";
import loggerService from "../services/loggerService.js";
import subtitleService from "../services/subtitleService.js";
import extractCompoundID from "../utils/compoundIdExtractor.js";
import extractFilename from "../utils/filenameExtractor.js";


const getManifest = async (req, res) => {
  loggerService.logInstall();
  dbService.insertAddonInstall();

  res.send(manifestConfig);
};

const getSubtitleSrt = async (req, res) => {
  const { imdbID, season, episode, subtitleID } = req.params;

  loggerService.logDownload(subtitleID);
  dbService.insertDownloadedContent(imdbID, season, episode);

  const srtContent = await subtitleService.extractSubtitleFromZipUrl(subtitleID);

  res.send(srtContent);
};

const getSubtitlesList = async (req, res) => {
  const { contentType, compoundID, extraArgs } = req.params;
  const [imdbID, season = 0, episode = 0] = extractCompoundID(compoundID);
  const filename = extractFilename(extraArgs);

  loggerService.logWatch(imdbID, season, episode);
  dbService.insertWatchedContent(contentType, imdbID, season, episode);

  const wizdomSubtitles = await subtitleService.fetchSubtitlesFromWizdom(imdbID, season, episode);
  const stremioSubtitles = subtitleService.mapSubtitlesToStremioFormat(wizdomSubtitles);
  const sortedSubtitles = subtitleService.sortSubtitlesByFilename(stremioSubtitles, filename);

  res.send({ subtitles: sortedSubtitles });
};

const subtitleController = {
  getManifest,
  getSubtitleSrt,
  getSubtitlesList,
};


export default subtitleController;