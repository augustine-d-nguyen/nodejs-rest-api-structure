import dotenv from 'dotenv';
import logger from './utils/logger';
import database from './utils/database';
import apis from './apis';

dotenv.config({
    path: __dirname + '/config.env'
});

process.on('uncaughtException', err => {
    logger.error('UNCAUGHT EXCEPTION!!! shutting down...');
    logger.error(err.message);
    process.exit(1);
});

process.on("unhandledRejection", err => {
    logger.error('UNHANDLED REJECTION!!!  shutting down ...');
    logger.error(err);
    process.exit(1);
});

database.init(process.env.SQL!).catch(err => {
    logger.error('Cannot connect to the database! shutting down ...');
    logger.error(err);
    process.exit(1);
});

const port = process.env.PORT || 3001;
apis.listen(port, () => {
    logger.info(`the APIs is running on port ${port}`);
});


