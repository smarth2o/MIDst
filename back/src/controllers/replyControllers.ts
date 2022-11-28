import { NextFunction, Request, Response } from "express";
import ReplyService from "services/replyService";

class DiaryController {
  public createReply = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const boardId = req.params.boardId;
      const replyData = req.body;
      const createReplyData = await ReplyService.createReply(
        boardId,
        replyData
      );
      res.status(201).json({ data: createReplyData, message: "created" });
    } catch (error) {
      next(error);
    }
  };

  public getReplies = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const boardId = req.params.boardId;
      const findAllRepliesData = await ReplyService.findAllReplies(boardId);
      res.status(200).json({ data: findAllRepliesData, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  public getReplyById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id;
      const findOneReplyData = await ReplyService.findOneReply(id);
      res.status(200).json({ data: findOneReplyData, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  public updateReply = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id;
      const replyData = req.body;
      const updateReplyData = await ReplyService.updateReply(id, replyData);
      res.status(200).json({ data: updateReplyData, message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  public deleteReply = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id;
      const deleteReplyData = await ReplyService.deleteReply(id);
      res.status(200).json({ data: deleteReplyData, message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}

export default new DiaryController();
