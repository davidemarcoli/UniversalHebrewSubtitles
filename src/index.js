import dotenv from "dotenv";
import express from "express";

import subtitleRoute from "./routes/subtitleRoute.js";


const app = express();
dotenv.config();


app.use("/", subtitleRoute);
app.listen(process.env.PORT, () => { console.log(`Server is running on ${process.env.BASE_URL}:${process.env.PORT}`); });