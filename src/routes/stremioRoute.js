import express from "express";

import stremioController from "../controllers/stremioController.js";
import corsMiddleware from "../middlewares/corsMiddleware.js";
import wrapTryCatch from "../utils/wrapTryCatch.js";


const router = express.Router();
router.get("/icon.svg", stremioController.getIcon);
router.get("/manifest.json", corsMiddleware, wrapTryCatch(stremioController.getManifest));
router.get("/subtitles/:source/:imdbID/:season/:episode/:subtitleID.srt", wrapTryCatch(stremioController.getSubtitleSrt));
router.get("/subtitles/:contentType/:compoundID/:extraArgs.json", corsMiddleware, wrapTryCatch(stremioController.getSubtitlesList));


export default router;