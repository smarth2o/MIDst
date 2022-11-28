import LikeController from "controllers/likeController";
import { Router } from "express";

const likeRouter: Router = Router();

likeRouter.post("/:boardId/like", LikeController.LikePost);
likeRouter.get("/:boardId/likes", LikeController.getLikes);

export default likeRouter;
