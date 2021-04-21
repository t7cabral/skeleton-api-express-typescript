import { Request, Response } from 'express';

class HomeService {
    public helloWorld(req: Request, res: Response) {
        return res.status(200).json({
            date: new Date(),
            message: 'Hello World Express/TS'
        });
    }
}

export default HomeService;