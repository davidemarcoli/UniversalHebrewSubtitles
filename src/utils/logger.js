import winston from "winston";


const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: "MM/DD HH:mm:ss" }),
        winston.format.printf(({ timestamp, message }) => `[${message[0]}] >> ${message[1]} >> ${timestamp}`),
    ),
    transports: [new winston.transports.Console()],
});


export default logger;