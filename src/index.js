import dotenv from "dotenv";
import express from "express";

import subtitleRoute from "./routes/subtitleRoute.js";
import logger from "./utils/logger.js";


dotenv.config();


const app = express();
app.use("/", subtitleRoute);
app.listen(process.env.PORT, () => { logger.info(["Express", "Express Connected"]); });