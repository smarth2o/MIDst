import { Router, Request, Response, NextFunction, json } from "express";
import { loginRequired } from "middlewares/authMiddleware";

import LikeService from "services/like.service";

const likeRouter: Router = Router();

likeRouter.get(
    "/:postId",
    /*
  #swagger.tags=['Like']
  #swagger.summary="커뮤니티 글 좋아요 목록"
  */
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const postId = req.params.postId;
            const result = await LikeService.getLikes(postId);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
likeRouter.post(
    "/:postId/like",
    /*
  #swagger.tags=['Like']
  #swagger.summary="커뮤니티 글 좋아요 토글"
  */
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId: any = req.headers["currentUserId"];
            const postId = req.params.postId;
            const result = await LikeService.LikePost(userId, postId);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);

export default likeRouter;
