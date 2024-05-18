import express from "express";

import stremioController from "../controllers/stremioController.js";
import corsMiddleware from "../middlewares/corsMiddleware.js";
import wrapTryCatch from "../utils/wrapTryCatch.js";


const router = express.Router();
router.get("/configure", stremioController.getConfigPage);
router.get("/:configString/configure", stremioController.getConfigPage);
router.get("/static/:path", stremioController.getStaticFile);
router.get("/:configString/static/:path", stremioController.getStaticFile);
router.get("/manifest.json", corsMiddleware, wrapTryCatch(stremioController.getManifest));
router.get("/:configString/manifest.json", corsMiddleware, wrapTryCatch(stremioController.getManifest));
router.get("/:configString/subtitles/:provider/:imdbID/:season/:episode/:subtitleID.srt", wrapTryCatch(stremioController.getSubtitleSrt));
router.get("/:configString/subtitles/:contentType/:compoundID/:extraArgs.json", corsMiddleware, wrapTryCatch(stremioController.getSubtitlesList));


export default router;