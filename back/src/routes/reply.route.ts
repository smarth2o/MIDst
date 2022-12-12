import { Router, Request, Response, NextFunction } from "express";
import { loginRequired } from "middlewares/authMiddleware";
import ReplyService from "services/reply.service";

const replyRouter: Router = Router();

replyRouter.post(
    "/:postId",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const postId: string = req.params.postId;
            const replyData: { name: string; description: string } = req.body;
            const result = await ReplyService.createReply(postId, replyData);
            res.status(201).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
replyRouter.get(
    "/:postId/all",
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const postId: string = req.params.postId;
            const result = await ReplyService.getReplies(postId);
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
            const id: string = req.params.id;
            const result = await ReplyService.getReplyById(id);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
replyRouter.put(
    "/:id",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id: string = req.params.id;
            const replyData: { description: string } = req.body;
            const result = await ReplyService.updateReply(id, replyData);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
replyRouter.delete(
    "/:id",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id: string = req.params.id;
            const result = await ReplyService.deleteReply(id);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);

export default replyRouter;
