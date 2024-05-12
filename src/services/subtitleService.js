import AdmZip from "adm-zip";
import superagent from "superagent";
import levenshtein from "fastest-levenshtein";

import wizdomApi from "../apis/wizdomApi.js";
import baseConfig from "../configs/baseConfig.js";


const fetchSubtitlesFromWizdom = async (imdbID, season, episode) => {
  const url = `${wizdomApi.CONTENT_URL}/search?action=by_id&imdb=${imdbID}&season=${season}&episode=${episode}`;
  const response = await superagent.get(url);
  const wizdomSubtitles = response.body;

  wizdomSubtitles.forEach((s) => {
    s.name = s.versioname;

    s.imdbID = imdbID;
    s.season = season;
    s.episode = episode;
  });

  return wizdomSubtitles;
};

const mapSubtitlesToStremioFormat = (subtitles) => {
  return subtitles.map((s) => ({
    url: `${baseConfig.BASE_URL}/${s.imdbID}/${s.season}/${s.episode}/${s.id}.srt`,
    id: s.name,
    lang: "heb",
  }));
};

const sortSubtitlesByFilename = (subtitles, filename) => {
  return subtitles.sort((a, b) => {
    const similarityA = levenshtein.distance(a.id, filename);
    const similarityB = levenshtein.distance(b.id, filename);

    return similarityA - similarityB;
  });
}

const extractSubtitleFromZipUrl = async (subtitleID) => {
  const url = `${wizdomApi.DOWNLOAD_URL}/${subtitleID}`;
  const response = await superagent.get(url).buffer(true);

  const zip = new AdmZip(response.body);
  const zipEntries = zip.getEntries();
  const srtEntry = zipEntries.find(entry => entry.entryName.endsWith('.srt'));
  const srtContent = srtEntry.getData().toString('utf8');

  return srtContent;
};

const subtitleService = {
  fetchSubtitlesFromWizdom,
  mapSubtitlesToStremioFormat,
  sortSubtitlesByFilename,
  extractSubtitleFromZipUrl,
};


export default subtitleService;