//검색 관련
import { Router, Response, Request, NextFunction } from "express";
import { mainService } from "../services/mainService";
import { loginRequired } from "../middlewares/authMiddleware";
const mainRouter = Router();

mainRouter.post(
    "/saveSearch",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction) => {
        try{
            const userId :any=req.headers["currentUserId"];
            const searchword = req.body.searchword;
            const description=req.body.description;
            const translation=req.body.translation;
    
            const saveSearch=await mainService.saveSearch(
                userId,
                searchword,
                description,
                translation
            );
            res.status(200).json(saveSearch);
        }
        catch (error) {
            next(error);
          }
      
    }
);

mainRouter.get(
    "/getSearch",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction) => {
        try{
            const userId :any=req.headers["currentUserId"];
            const findSearch=await mainService.findSearch(
                userId
            );
            res.status(200).json(findSearch);
        }
        catch (error) {
            next(error);
          }
      
    }
);
mainRouter.get(
    "/getCountSearch",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction) => {
        try{
            const userId :any=req.headers["currentUserId"];
            const countSearch=await mainService.countSearch(
                userId
            );
            res.status(200).json(countSearch);
        }
        catch (error) {
            next(error);
          }
      
    }
);

mainRouter.put(
    "/deleteSearch",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction) => {
        try{
            //const userId :any=req.headers["currentUserId"];
            const searchId=req.body.searchId
            const deleteSearch=await mainService.deleteSearch(
                searchId
            );
            res.status(200).json(deleteSearch);
        }
        catch (error) {
            next(error);
          }
      
    }
);


export { mainRouter };