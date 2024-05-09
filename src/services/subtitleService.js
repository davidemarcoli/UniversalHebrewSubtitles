import JSZip from "jszip";
import superagent from "superagent";

import wizdomApi from "../apis/wizdomApi.js";
import baseConfig from "../configs/baseConfig.js";
import levenshtein from "../utils/levenshtein.js";


const fetchSubtitlesFromWizdom = async (imdbID, season, episode) => {
  const url = `${wizdomApi.CONTENT_URL}/search?action=by_id&imdb=${imdbID}&season=${season}&episode=${episode}`;
  const response = await superagent.get(url);
  const wizdomSubtitles = response.body;

  wizdomSubtitles.forEach((s) => {
    s.imdbID = imdbID;
    s.season = season;
    s.episode = episode;
  });

  return wizdomSubtitles;
};

const mapSubtitlesToStremioFormat = (subtitles) => {
  return subtitles.map((s) => ({
    url: `${baseConfig.BASE_URL}/${s.imdbID}/${s.season}/${s.episode}/${s.id}.srt`,
    id: `${s.versioname}`,
    lang: "heb",
  }));
};

const sortSubtitlesByFilename = (subtitles, filename) => {
  return subtitles.sort((a, b) => {
    const similarityA = levenshtein(a.id, filename);
    const similarityB = levenshtein(b.id, filename);

    return similarityA - similarityB;
  });
}

const extractSubtitleFromZipUrl = async (subtitleID) => {
  const url = `${wizdomApi.DOWNLOAD_URL}/${subtitleID}`;
  const response = await superagent.get(url).buffer(true);
  const zip = await JSZip.loadAsync(response.body);
  const srtContent = await zip.file(Object.keys(zip.files)[0]).async("string");

  return srtContent;
};


export { fetchSubtitlesFromWizdom, mapSubtitlesToStremioFormat, sortSubtitlesByFilename, extractSubtitleFromZipUrl };