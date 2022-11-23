import { Router, Request, Response } from "express";
import DiaryService from "services/diaryService";
const diaryRouter: Router = Router();

//일기 작성하기
diaryRouter.post("/:userId/diaries", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const { title, description, emotion } = req.body;
    const result = await DiaryService.createDiary(
      userId,
      title,
      description,
      emotion
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});

//일기 가져오기
diaryRouter.get(
  "/:userId?/diaries/:id?",
  async (req: Request, res: Response) => {
    try {
      const { userId, id } = req.params;
      const result = await DiaryService.getDiary(userId, id);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  }
);

//일기 수정하기
diaryRouter.put("/diaries/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, description, emotion } = req.body;
    const result = await DiaryService.editDiary(
      id,
      title,
      description,
      emotion
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});

//일기 삭제하기
diaryRouter.delete("/diaries/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await DiaryService.deleteDiary(id);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});

export default diaryRouter;
