import dotenv from "dotenv";
dotenv.config();


const baseConfig = {
    BASE_URL: process.env.BASE_URL,
    PORT: process.env.PORT,
};


export default baseConfig;