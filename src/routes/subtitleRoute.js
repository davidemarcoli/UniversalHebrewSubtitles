import express from "express";

import wrapTryCatch from "../utils/wrapTryCatch.js";
import corsMiddleware from "../middlewares/corsMiddleware.js";
import { getManifest, getSubtitleSrt, getSubtitlesList } from "../controllers/subtitleController.js";


const router = express.Router();
router.get("/manifest.json", corsMiddleware, wrapTryCatch(getManifest));
router.get("/:imdbID/:season/:episode/:subtitleID.srt", wrapTryCatch(getSubtitleSrt));
router.get("/subtitles/:contentType/:compoundID/:extraArgs.json", corsMiddleware, wrapTryCatch(getSubtitlesList));


export default router;