import wizdomService from "../services/wizdomService.js";


const getSubtitleSrt = async (subtitleID) => {
    const srtContent = await wizdomService.extractSubtitleFromWizdom(subtitleID);

    return srtContent;
};

const getSubtitlesList = async (imdbID, season, episode) => {
    const wizdomSubtitles = await wizdomService.fetchSubtitlesFromWizdom(imdbID, season, episode);
    const stremioSubtitles = wizdomService.mapSubtitlesToStremio(wizdomSubtitles);

    return stremioSubtitles;
};


const wizdomController = {
    getSubtitleSrt,
    getSubtitlesList,
};


export default wizdomController;