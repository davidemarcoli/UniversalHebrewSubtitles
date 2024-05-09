import logger from "../utils/logger.js";
import manifestConfig from "../configs/manifestConfig.js";
import subtitleDownloadModel from "../models/subtitleDownloadModel.js";
import subtitleInstallMondel from "../models/subtitleInstallModel.js";
import subtitleWatchModel from "../models/subtitleWatchModel.js";
import extractFilename from "../utils/filenameExtractor.js";
import extractCompoundID from "../utils/compoundIdExtractor.js";
import { fetchSubtitlesFromWizdom, sortSubtitlesByFilename, mapSubtitlesToStremioFormat, extractSubtitleFromZipUrl } from "../services/subtitleService.js";


const getManifest = async (req, res) => {
  const subtitleInstallTable = await subtitleInstallMondel.findOneAndUpdate({}, { $inc: { count: 1 } }, { upsert: true, new: true });
  logger.info(["Install", `[${subtitleInstallTable.count}] Addon Installed`]);

  res.send(manifestConfig);
};

const getSubtitleSrt = async (req, res) => {
  const subtitleDownloadTable = await subtitleDownloadModel.findOneAndUpdate({}, { $inc: { count: 1 } }, { upsert: true, new: true });
  logger.info(["Download", `[${subtitleDownloadTable.count}] subtitleId=${req.params.subtitleId}`]);

  const { subtitleId } = req.params;
  const srtContent = await extractSubtitleFromZipUrl(subtitleId);

  res.send(srtContent);
};

const getSubtitlesList = async (req, res) => {
  const { compoundID, extraArgs } = req.params;
  const [id, season = 0, episode = 0] = extractCompoundID(compoundID);
  const filename = extractFilename(extraArgs);

  const subtitleWatchTable = await subtitleWatchModel.findOneAndUpdate({}, { $inc: { count: 1 } }, { upsert: true, new: true });
  logger.info(["Watch", `[${subtitleWatchTable.count}] id=${id}, season=${season}, episode=${episode}, filename=${filename}`]);

  try {
    const wizdomSubtitles = await fetchSubtitlesFromWizdom(id, season, episode);
    const stremioSubtitles = mapSubtitlesToStremioFormat(wizdomSubtitles);
    const sortedSubtitles = sortSubtitlesByFilename(stremioSubtitles, filename);

    res.send({ subtitles: sortedSubtitles });
  } catch (error) {
    logger.info(["Error", error]);
    res.send({ subtitles: [] });
  }
};


export { getManifest, getSubtitleSrt, getSubtitlesList };
