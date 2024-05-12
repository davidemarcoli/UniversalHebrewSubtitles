import extractCompoundID from "./compoundIdExtractor.js";
import extractFilename from "./filenameExtractor.js";
import dataValidation from "../validations/dataValidation.js";


const extractData = (params) => {
    const { contentType, compoundID, extraArgs } = params;
    const [imdbID, season, episode] = extractCompoundID(compoundID);
    const filename = extractFilename(extraArgs);

    const valid = dataValidation(contentType, imdbID, season, episode);
    if (valid === false) throw new Error("Invalid data");

    return { imdbID, season, episode, filename };
};


export default extractData;