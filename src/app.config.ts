import express, { Application } from 'express'

class App {
    public app: Application;
    public port: number;

    constructor(appConfig: { port: number, middlewares: any, routes: any }) {
        this.app = express();
        this.port = appConfig.port;
        this.setMiddlewares(appConfig.middlewares);
        this.setRoutes(appConfig.routes);
    }

    public listen() {
        this.app.listen(this.port, () => console.log(`Express started at port ${this.port}.`))
    }

    private setMiddlewares(middlewares: { forEach: (middleware: (middleware: any) => void) => void;}) {
        middlewares.forEach(middlewareItem => {
            this.app.use(middlewareItem);
        });
    }

    private setRoutes(routes: { forEach: (route: (route: any) => void) => void;}) {
        routes.forEach(routerItem => {
            this.app.use('/', routerItem.router);
        });
    }

}

export default App;