import { Router, Request, Response, NextFunction } from "express";
import ReplyService from "services/reply.service";

const replyRouter: Router = Router();

replyRouter.post(
  "/:boardId",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId: any = req.headers["currentUserId"];
      const boardId = req.params.boardId;
      const replyData = req.body;
      const result = await ReplyService.createReply(userId, boardId, replyData);
      res.status(201).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);
replyRouter.get(
  "/:boardId/all",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const boardId = req.params.boardId;
      const result = await ReplyService.getReplies(boardId);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);

replyRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const result = await ReplyService.getReplyById(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);
replyRouter.put(
  "/:id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const replyData = req.body;
      const result = await ReplyService.updateReply(id, replyData);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);
replyRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const result = await ReplyService.deleteReply(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);

export default replyRouter;
