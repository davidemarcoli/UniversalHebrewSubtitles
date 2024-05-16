import express from "express";

import baseConfig from "./configs/baseConfig.js";
import stremioRoute from "./routes/stremioRoute.js";
import loggerService from "./services/loggerService.js";


const app = express();
app.use("/", stremioRoute);
app.listen(baseConfig.PORT, () => { loggerService.logExpress(); });