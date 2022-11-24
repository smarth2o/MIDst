import { Router } from "express";
import DiaryController from "controllers/diaryController";

const diaryRouter: Router = Router();

diaryRouter.post("/:userId/diaries", DiaryController.createDiary);
diaryRouter.get("/:userId/diaries", DiaryController.getDiaries);
diaryRouter.get("/diaries/:id", DiaryController.getDiaryById);
diaryRouter.put("/diaries/:id", DiaryController.updateDiary);
diaryRouter.delete("/diaries/:id", DiaryController.deleteDiary);

export default diaryRouter;
