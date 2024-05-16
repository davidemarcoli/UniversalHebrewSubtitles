import levenshtein from "fastest-levenshtein";

import wizdomController from "../controllers/wizdomController.js";


const getSubtitleSrt = async (source, subtitleID) => {
  let srtContent;

  if (source === "wizdom") srtContent = await wizdomController.getSubtitleSrt(subtitleID);

  return srtContent;
};

const getSubtitlesList = async (imdbID, season, episode) => {
  const wizdomSubtitles = await wizdomController.getSubtitlesList(imdbID, season, episode);

  return wizdomSubtitles;
};

const sortSubtitlesByFilename = (subtitles, filename) => {
  return subtitles.sort((a, b) => {
    const similarityA = levenshtein.distance(a.id, filename);
    const similarityB = levenshtein.distance(b.id, filename);

    return similarityA - similarityB;
  });
}

const stremioService = {
  getSubtitleSrt,
  getSubtitlesList,
  sortSubtitlesByFilename,
};


export default stremioService;