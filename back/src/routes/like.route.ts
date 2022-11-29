import { Router, Request, Response, NextFunction, json } from "express";

import LikeService from "services/like.service";

const likeRouter: Router = Router();

likeRouter.get(
  "/:boardId",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const boardId = req.params.boardId;
      const result = await LikeService.getLikes(boardId);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);
likeRouter.post(
  "/:boardId/like",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId: any = req.headers["currentUserId"];
      const boardId = req.params.boardId;
      const result = await LikeService.LikePost(userId, boardId);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);

export default likeRouter;
