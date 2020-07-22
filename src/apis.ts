import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import logger from './utils/logger';
import routes from './routes/end_user_routes'

class APIs {
    public express : express.Application;

    constructor() {
        this.express = express();
        this.regMiddlewares();
        this.regRoutes();
    }

    private regMiddlewares(): void {
        // - set parser
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        // - set logger
        this.express.use(morgan('combined', { stream: { write: (str: any) => { logger.info(str); } } }));
        // - allow cross-origin requests
        this.express.use(cors());
        // - set security HTTP headers
        this.express.use(helmet());
        // - prevent parameter pollution
        this.express.use(hpp());
    }

    private regRoutes(): void {
        // - register routes of end user's apis
        this.express.use('/api/v1/user', routes);
    }
}

export default new APIs().express;