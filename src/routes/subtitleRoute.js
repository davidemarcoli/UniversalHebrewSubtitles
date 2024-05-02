import express from "express";

import corsMiddleware from "../middlewares/corsMiddleware.js";
import { getManifest, getSubtitles, getSubtitleZip } from "../controllers/subtitleController.js";


const router = express.Router();
router.get("/manifest.json", corsMiddleware, getManifest);
router.get("/subtitles/:contentType/:compoundID/:extraArgs.json", corsMiddleware, getSubtitles);
router.get("/:subtitleId.srt", getSubtitleZip);


export default router;