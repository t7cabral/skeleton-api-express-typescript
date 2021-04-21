import * as express from 'express';
import HomeService from './../services/home.services';

class HomeRouter {
    public path = '/';
    public router = express.Router();
    private homeService: HomeService;

    constructor() {
        this.homeService = new HomeService();
        this.setupRoutes();
    }

    public setupRoutes() {
        this.router.get(this.path, this.homeService.helloWorld);
    }
}

export default HomeRouter