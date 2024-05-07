import winston from 'winston';


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'DD/MM' }),
        winston.format.printf(({ timestamp, level, message }) => `[${level}] ${timestamp}: ${message}`),
    ),
    transports: [new winston.transports.Console()],
});


export default logger;