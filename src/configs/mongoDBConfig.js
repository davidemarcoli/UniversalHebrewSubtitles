import mongoose from "mongoose";

import logger from "../utils/logger.js";


const mongoDBConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        logger.info(["MongoDB", "MongoDB Connceted"]);
    } catch (error) {
        console.log(error);
        logger.error(["MongoDB", error]);
    }
};


export default mongoDBConfig;