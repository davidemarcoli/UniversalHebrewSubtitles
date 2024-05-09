import pool from "../configs/databaseConfig.js";
import manifestConfig from "../configs/manifestConfig.js";
import addonInstallsQuery from "../queries/addonInstallsQuery.js";
import downloadedContentQuery from "../queries/downloadedContentQuery.js";
import watchedContentQuery from "../queries/watchedContentQuery.js";
import logger from "../utils/logger.js";
import extractFilename from "../utils/filenameExtractor.js";
import extractCompoundID from "../utils/compoundIdExtractor.js";
import { fetchSubtitlesFromWizdom, sortSubtitlesByFilename, mapSubtitlesToStremioFormat, extractSubtitleFromZipUrl } from "../services/subtitleService.js";


const getManifest = async (req, res) => {
  pool.query(addonInstallsQuery.insertInstall);

  logger.info(["Install", `Addon Installed`]);
  res.send(manifestConfig);
};

const getSubtitleSrt = async (req, res) => {
  const { imdbID, season, episode, subtitleID } = req.params;
  pool.query(downloadedContentQuery.insertDownload, [imdbID, season, episode]);

  const srtContent = await extractSubtitleFromZipUrl(subtitleID);

  logger.info(["Download", `subtitleID=${req.params.subtitleID}`]);
  res.send(srtContent);
};

const getSubtitlesList = async (req, res) => {
  const { contentType, compoundID, extraArgs } = req.params;
  const [imdbID, season = 0, episode = 0] = extractCompoundID(compoundID);
  const filename = extractFilename(extraArgs);

  if (["series", "movie"].includes(contentType)) pool.query(watchedContentQuery.insertWatch, [imdbID, season, episode]);

  const wizdomSubtitles = await fetchSubtitlesFromWizdom(imdbID, season, episode);
  const stremioSubtitles = mapSubtitlesToStremioFormat(wizdomSubtitles);
  const sortedSubtitles = sortSubtitlesByFilename(stremioSubtitles, filename);

  logger.info(["Watch", `imdbID=${imdbID}, season=${season}, episode=${episode}, filename=${filename}`]);
  res.send({ subtitles: sortedSubtitles });
};


export { getManifest, getSubtitleSrt, getSubtitlesList };