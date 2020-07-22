import { Sequelize, Model, ModelAttributes, InitOptions } from 'sequelize'
import logger from './logger'
import EndUser from '../models/end_user';

class Database {
    private orm?: Sequelize;

    public async init(uri: string): Promise<any> {
        if (this.orm == null) {
            this.orm = new Sequelize(uri, { 
                define: { timestamps: false },
                logging: logger.debug.bind(logger)
            });
            try {
                await this.orm.authenticate();
                EndUser.setup(this.orm);
            } catch (err) {
                return Promise.reject(err);
            }
        }
    }
}

export default new Database();