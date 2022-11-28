import { NextFunction, Request, Response } from "express";
import DiaryService from "services/diaryService";

class DiaryController {
  public createDiary = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.params.userId;
      const diaryData = req.body;
      const createDiaryData = await DiaryService.createDiary(userId, diaryData);

      res.status(201).json({ data: createDiaryData, message: "created" });
    } catch (error) {
      next(error);
    }
  };

  public getDiaries = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.params.userId;
      const findDiariesData = await DiaryService.findDiaries(userId);
      res.status(201).json({ data: findDiariesData, message: "findDiaries" });
    } catch (error) {
      next(error);
    }
  };

  public getDiaryById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id;
      const findOneDiary = await DiaryService.findDiaryById(id);
      res.status(201).json({ data: findOneDiary, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  public updateDiary = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id;
      const diaryData = req.body;
      const updateDiaryData = await DiaryService.updateDiary(id, diaryData);
      res.status(201).json({ data: updateDiaryData, message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  public deleteDiary = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id;
      const deleteDiaryData = await DiaryService.deleteDiary(id);
      res.status(201).json({ data: deleteDiaryData, message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}

export default new DiaryController();
