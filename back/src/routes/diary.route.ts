import { Router, Request, Response, NextFunction } from "express";
import { loginRequired } from "middlewares/authMiddleware";
import DiaryService from "services/diary.service";

const diaryRouter: Router = Router();

diaryRouter.post(
    "/",
    /*
  #swagger.tags=['Diaries']
  #swagger.summary="일기 작성"
  */
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId: any = req.headers["currentUserId"];
            const diaryData: {
                date: string;
                title: string;
                description: string;
            } = req.body;
            const result = await DiaryService.createDiary(userId, diaryData);
            res.status(201).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
diaryRouter.get(
    "/",
    loginRequired,
    /*
  #swagger.tags=['Diaries']
  #swagger.summary="유저 일기 목록 조회"
  */
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId: any = req.headers["currentUserId"];
            const result = await DiaryService.getDiaries(userId);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
diaryRouter.get(
    "/:id",
    /*
  #swagger.tags=['Diaries']
  #swagger.summary="특정 일기 조회"
  */
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = req.params.id;
            const result = await DiaryService.getDiaryById(id);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
diaryRouter.put(
    "/:id",
    /*
  #swagger.tags=['Diaries']
  #swagger.summary="일기 수정"
  */
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            /*
      #swagger.parameters['obj'] = {
                in: 'body',
                description: 'diaryData',
                schema:{
                  diaryData:{
                    $date: 'string',
                    $title: 'string',
                    $description:'string',
                    $emotion:'string'
                  }
                }
            }
      */
            const id = req.params.id;
            const diaryData = req.body;
            const result = await DiaryService.updateDiary(id, diaryData);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
diaryRouter.delete(
    "/:id",
    /*
  #swagger.tags=['Diaries']
  #swagger.summary="일기 삭제"
  */
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = req.params.id;
            const result = await DiaryService.deleteDiary(id);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);

export default diaryRouter;
