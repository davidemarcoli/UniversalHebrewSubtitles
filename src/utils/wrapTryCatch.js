import logger from "./logger.js";


const wrapTryCatch = (fn) => async (req, res) => {
    try {
        await fn(req, res);
    } catch (error) {
        logger.error(["Error", error]);
        res.send({ subtitles: [] });
    }
};


export default wrapTryCatch;