import express from "express";

import subtitleController from "../controllers/subtitleController.js";
import corsMiddleware from "../middlewares/corsMiddleware.js";
import wrapTryCatch from "../utils/wrapTryCatch.js";


const router = express.Router();
router.get("/manifest.json", corsMiddleware, wrapTryCatch(subtitleController.getManifest));
router.get("/:imdbID/:season/:episode/:subtitleID.srt", wrapTryCatch(subtitleController.getSubtitleSrt));
router.get("/subtitles/:contentType/:compoundID/:extraArgs.json", corsMiddleware, wrapTryCatch(subtitleController.getSubtitlesList));


export default router;