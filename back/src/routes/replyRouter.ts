import { Router } from "express";
import ReplyController from "repositories/replyControllers";

const replyRouter: Router = Router();

replyRouter.post("/:boardId/replies", ReplyController.createReply);
replyRouter.get("/:boardId/replies", ReplyController.getReplies);
replyRouter.get("/replies/:id", ReplyController.getReplyById);
replyRouter.put("/replies/:id", ReplyController.updateReply);
replyRouter.delete("/replies/:id", ReplyController.deleteReply);

export default replyRouter;
