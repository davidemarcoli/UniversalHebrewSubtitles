import dotenv from "dotenv";
import express from "express";

import mongoDBConfig from "./configs/mongoDBConfig.js";
import subtitleRoute from "./routes/subtitleRoute.js";
import logger from "./utils/logger.js";


dotenv.config();
await mongoDBConfig();


const app = express();
app.use("/", subtitleRoute);
app.listen(process.env.PORT, () => { logger.info(["Express", "Express Connected"]); });