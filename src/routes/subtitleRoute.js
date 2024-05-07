import express from "express";

import corsMiddleware from "../middlewares/corsMiddleware.js";
import { getManifest, getSubtitle, getSubtitles } from "../controllers/subtitleController.js";


const router = express.Router();
router.get("/manifest.json", corsMiddleware, getManifest);
router.get("/:subtitleId.srt", getSubtitle);
router.get("/subtitles/:contentType/:compoundID/:extraArgs.json", corsMiddleware, getSubtitles);


export default router;