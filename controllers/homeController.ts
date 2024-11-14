import { Request, Response, NextFunction } from "express";


const homeController = (req: Request, res: Response, next: NextFunction) => {
        res.render('./home', {
            pageTitle: 'Node and Express with TypeScript',
        });
};

export { homeController };