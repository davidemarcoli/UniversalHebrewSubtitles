import express from "express";

import baseConfig from "./configs/baseConfig.js";
import subtitleRoute from "./routes/subtitleRoute.js";
import loggerService from "./services/loggerService.js";


const app = express();
app.use("/", subtitleRoute);
app.listen(baseConfig.PORT, () => { loggerService.logExpress(); });