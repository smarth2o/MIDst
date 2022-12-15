import textgears from "textgears-api";
import { Router, Request, Response, NextFunction } from "express";
import { loginRequired } from "middlewares/authMiddleware";
import DiaryService from "services/diary.service";
import EmotionService from "services/emotion.service";

const diaryRouter: Router = Router();

diaryRouter.post(
    "/",
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
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id: string = req.params.id;
            const result = await DiaryService.getDiaryById(id);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);

diaryRouter.put(
    "/:id",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id: string = req.params.id;
            const diaryData: {
                date?: string;
                title?: string;
                description?: string;
            } = req.body;
            const result = await DiaryService.updateDiary(id, diaryData);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);

diaryRouter.delete(
    "/:id",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id: string = req.params.id;
            const result = await DiaryService.deleteDiary(id);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);

diaryRouter.post(
    "/:id/emotions",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id;
            const description: string = req.body.description;
            const result = await EmotionService.checkEmotion(id, description);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);

const responseFilter = (description: string, data) => {
    const errorList = data["response"]["errors"];
    errorList.forEach((error) => {
        let start1 = description.lastIndexOf(".", error.offset);

        let start2 = description.lastIndexOf("?", error.offset);

        let start3 = description.lastIndexOf("!", error.offset);

        let start = Math.max(start1, start2, start3);
        if (start === -1) {
            start = 0;
        }

        let end1 = description.indexOf(".", error.offset);
        if (end1 === -1) {
            end1 = 999;
        }

        let end2 = description.indexOf("?", error.offset);
        if (end2 === -1) {
            end2 = 999;
        }

        let end3 = description.indexOf("!", error.offset);
        if (end3 === -1) {
            end3 = 999;
        }

        const end = Math.min(end1, end2, end3);

        if (start === 0) {
            error["before"] = description.slice(start, end + 1);
        } else {
            error["before"] = description.slice(start + 2, end + 1);
        }

        error["index"] = error.offset - start;

        delete error.offset;
        delete error.id;
    });
    return errorList;
};

diaryRouter.post(
    "/grammerCheck",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const description: string = req.body.description;
            const textgearsApi = textgears(process.env.TEXTGEARS_API_KEY, {
                language: "en-US",
            });
            const check = await textgearsApi.checkGrammar(description);
            const result = responseFilter(description, check);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
);

diaryRouter.post(
    "/:id/grammers",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id;
            const grammerData: {
                type: string;
                description: string;
                before: string;
                bad: string;
                better: string;
                index: number;
                length: number;
            } = req.body;
            const result = await DiaryService.createCheck(id, grammerData);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);

export default diaryRouter;
