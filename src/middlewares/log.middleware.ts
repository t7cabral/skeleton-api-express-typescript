import { Request, Response } from 'express';
import { nextTick } from 'node:process';

const logMiddleware = (res: Response, req: Request, next: any) => {

    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - xxxx`);
    next();
}

export default logMiddleware;