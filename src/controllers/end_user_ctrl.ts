import { Request, Response, NextFunction } from 'express';
import user from '../models/end_user'

export class EndUserCtrl {
    constructor() {}

    public getWelcome(req: Request, res: Response, next: NextFunction): void {
        res.json({ message: 'End User\'s APIs' });
    }

    public async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<any> {
        const r = await user.findAll();
        res.json(r);
    }
}

export default new EndUserCtrl();