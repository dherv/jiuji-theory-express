import winston from 'winston';

const options = {
  file: {
    level: 'info',
    filename: `${process.cwd()}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    prettyPrint: true,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

const loggerStream = {
  write: (message: string): void => {
    logger.info(message);
  },
};
export default loggerStream;
