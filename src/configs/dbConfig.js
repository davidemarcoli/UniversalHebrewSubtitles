import pg from "pg";
import dotenv from "dotenv";

import loggerService from "../services/loggerService.js";


dotenv.config();
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
loggerService.logDatabase();


export default pool;