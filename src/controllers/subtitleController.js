import logger from "../utils/logger.js";
import manifestConfig from "../configs/manifestConfig.js";
import extractFilename from "../utils/filenameExtractor.js";
import extractCompoundID from "../utils/compoundIdExtractor.js";
import { fetchSubtitlesFromWizdom, sortSubtitlesByFilename, mapSubtitlesToStremioFormat, extractSubtitleFromZipUrl } from "../services/subtitleService.js";


const getManifest = (req, res) => {
  logger.info(["Install", "Manifest Addon"]);

  res.send(manifestConfig);
};

const getSubtitleSrt = async (req, res) => {
  logger.info(["Download", `subtitleId=${req.params.subtitleId}`]);

  const { subtitleId } = req.params;
  const srtContent = await extractSubtitleFromZipUrl(subtitleId);

  res.send(srtContent);
};

const getSubtitlesList = async (req, res) => {
  const { compoundID, extraArgs } = req.params;
  const [id, season = 0, episode = 0] = extractCompoundID(compoundID);
  const filename = extractFilename(extraArgs);

  logger.info(["Watch", `id=${id}, season=${season}, episode=${episode}, filename=${filename}`]);

  try {
    const wizdomSubtitles = await fetchSubtitlesFromWizdom(id, season, episode);
    const stremioSubtitles = mapSubtitlesToStremioFormat(sortedSubtitles);
    const sortedSubtitles = sortSubtitlesByFilename(wizdomSubtitles, filename);

    res.send({ subtitles: sortedSubtitles });
  } catch (error) {
    logger.info(["Error", error]);
    res.send({ subtitles: [] });
  }
};


export { getManifest, getSubtitleSrt, getSubtitlesList };