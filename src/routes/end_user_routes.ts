import { Router } from 'express';
import ctrl from '../controllers/end_user_ctrl';

export class EndUserRoutes {
    public router : Router;

    constructor() {
        this.router = Router();
        this.regGetRoutes();
        this.regPostRoutes();
        this.regPutRoutes();
        this.regDelRoutes();
    }

    private regGetRoutes(): void {
        this.router.get('/', ctrl.getWelcome);
        this.router.get('/all', ctrl.getAllUsers);
    }

    private regPostRoutes(): void {
        
    }

    private regPutRoutes(): void {
        
    }

    private regDelRoutes(): void {
        
    }
}

export default new EndUserRoutes().router;