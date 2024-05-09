import express from "express";

import corsMiddleware from "../middlewares/corsMiddleware.js";
import { getManifest, getSubtitleSrt, getSubtitlesList } from "../controllers/subtitleController.js";


const router = express.Router();
router.get("/manifest.json", corsMiddleware, getManifest);
router.get("/:imdbID/:season/:episode/:subtitleID.srt", getSubtitleSrt);
router.get("/subtitles/:contentType/:compoundID/:extraArgs.json", corsMiddleware, getSubtitlesList);


export default router;