import logger from "../utils/logger.js";
import manifestConfig from "../configs/manifestConfig.js";
import extractFilename from "../utils/filenameExtractor.js";
import extractCompoundID from "../utils/compoundIdExtractor.js";
import { fetchSubtitlesFromWizdom, sortSubtitlesByFilename, mapSubtitlesToStremioFormat, extractSubtitleFromZipUrl } from "../services/subtitleService.js";


const getManifest = (req, res) => {
  logger.info(`Manifest`);

  res.send(manifestConfig);
};

const getSubtitleSrt = async (req, res) => {
  logger.info(`getSubtitleSrt(subtitleId=${req.params.subtitleId})`);

  const { subtitleId } = req.params;
  const srtContent = await extractSubtitleFromZipUrl(subtitleId);

  res.send(srtContent);
};

const getSubtitlesList = async (req, res) => {
  const { compoundID, extraArgs } = req.params;
  const [id, season = 0, episode = 0] = extractCompoundID(compoundID);
  const filename = extractFilename(extraArgs);

  logger.info(`getSubtitlesList(id=${id}, season=${season}, episode=${episode}, filename=${filename})`);

  try {
    const wizdomSubtitles = await fetchSubtitlesFromWizdom(id, season, episode);
    const sortedSubtitles = sortSubtitlesByFilename(wizdomSubtitles, filename);
    const stremioSubtitles = mapSubtitlesToStremioFormat(sortedSubtitles);

    res.send({ subtitles: stremioSubtitles });
  } catch (error) {
    logger.error(`Error: ${error}`);
    res.send({ subtitles: [] });
  }
};


export { getManifest, getSubtitleSrt, getSubtitlesList };