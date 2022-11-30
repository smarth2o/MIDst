import { Router, Request, Response, NextFunction } from "express";
import { loginRequired } from "middlewares/authMiddleware";
import ReplyService from "services/reply.service";

const replyRouter: Router = Router();

replyRouter.post(
    "/:postId",
    /*
  #swagger.tags=['Reply']
  #swagger.summary="커뮤니티 글 댓글 작성"
  */
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId: any = req.headers["currentUserId"];
            const postId = req.params.postId;
            const replyData = req.body;
            const result = await ReplyService.createReply(
                userId,
                postId,
                replyData
            );
            res.status(201).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
replyRouter.get(
    "/:postId/all",
    /*
  #swagger.tags=['Reply']
  #swagger.summary="커뮤니티 글 댓글 목록"
  */
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const postId = req.params.postId;
            const result = await ReplyService.getReplies(postId);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);

replyRouter.get(
    "/:id",
    /*
  #swagger.tags=['Reply']
  #swagger.summary="커뮤니티 글 특정 댓글 상세"
  */
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
    /*
  #swagger.tags=['Reply']
  #swagger.summary="커뮤니티 글 댓글 수정"
  */
    loginRequired,
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
    /*
  #swagger.tags=['Reply']
  #swagger.summary="커뮤니티 글 댓글 삭제"
  */
    loginRequired,
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
