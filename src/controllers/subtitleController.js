import manifestConfig from "../configs/manifestConfig.js";
import extractFilename from "../utils/filenameExtractor.js";
import extractCompoundID from "../utils/compoundIdExtractor.js";
import { fetchSubtitlesFromWizdom, sortSubtitlesByFilename, mapSubtitlesToStremioFormat, downloadSubtitleZip } from "../services/subtitleService.js";


const getManifest = (req, res) => {
  res.send(manifestConfig);
};

const getSubtitles = async (req, res) => {
  const { compoundID, extraArgs } = req.params;
  const filename = extractFilename(extraArgs);

  try {
    const wizdomSubtitles = await fetchSubtitlesFromWizdom(...extractCompoundID(compoundID));
    const sortedSubtitles = sortSubtitlesByFilename(wizdomSubtitles, filename);
    const stremioSubtitles = mapSubtitlesToStremioFormat(sortedSubtitles);

    res.send({ subtitles: stremioSubtitles });
  } catch (error) {
    console.error(error);
    res.send({ subtitles: [] });
  }
};

const getSubtitleZip = async (req, res) => {
  const { subtitleId } = req.params;
  const srtContent = await downloadSubtitleZip(subtitleId);

  res.send(srtContent);
};


export { getManifest, getSubtitles, getSubtitleZip };