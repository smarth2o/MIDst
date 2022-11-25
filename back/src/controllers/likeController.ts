import { NextFunction, Request, Response } from "express";
import LikeService from "services/likeService";

class LikeController {
  public getLikes = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const boardId = req.params.boardId;
      const findLikesData = await LikeService.findLikes(boardId);
      res.status(200).json({ data: findLikesData });
    } catch (error) {
      next(error);
    }
  };

  public LikePost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const boardId = req.params.boardId;
      const { userId } = req.body;
      const likeData = await LikeService.findLike(boardId, userId);
      if (likeData.length !== 0) {
        const deleteLikeData = await LikeService.deleteLike(boardId, userId);
        res.status(200).json({ data: deleteLikeData, message: "deleted" });
        return;
      }
      const createLikeData = await LikeService.createLike(boardId, userId);
      res.status(201).json({ data: createLikeData, message: "created" });
    } catch (error) {
      next(error);
    }
  };
}

export default new LikeController();
