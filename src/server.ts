import App from './app.config';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';

import logMiddleware from './middlewares/log.middleware';
import HomeRouter from './routes/home.router'

const app = new App({
    port: 3000,
    middlewares: [
        morgan('dev'),
        bodyParser.urlencoded({ extended: false }),
        bodyParser.json(),
        logMiddleware
    ],
    routes: [
        new HomeRouter()
    ]
});

app.listen();