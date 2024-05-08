import JSZip from "jszip";
import superagent from "superagent";

import wizdomApi from "../apis/wizdomApi.js";
import baseConfig from "../configs/baseConfig.js";
import levenshtein from "../utils/levenshtein.js";


const fetchSubtitlesFromWizdom = async (id, season, episode) => {
  const url = `${wizdomApi.CONTENT_URL}/search?action=by_id&imdb=${id}&season=${season}&episode=${episode}`;
  const response = await superagent.get(url);
  const wizdomSubtitles = response.body;

  return wizdomSubtitles;
};

const mapSubtitlesToStremioFormat = (subtitles) => {
  return subtitles.map((s) => ({
    url: `${baseConfig.BASE_URL}/${s.id}.srt`,
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

const extractSubtitleFromZipUrl = async (subtitleId) => {
  const url = `${wizdomApi.DOWNLOAD_URL}/${subtitleId}`;
  const response = await superagent.get(url).buffer(true);
  const zip = await JSZip.loadAsync(response.body);
  const srtContent = await zip.file(Object.keys(zip.files)[0]).async("string");

  return srtContent;
};


export { fetchSubtitlesFromWizdom, mapSubtitlesToStremioFormat, sortSubtitlesByFilename, extractSubtitleFromZipUrl };
