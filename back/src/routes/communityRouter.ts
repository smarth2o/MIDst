import { Router } from "express";
import communityController from "controllers/communityController";

const communityRouter: Router = Router();

communityRouter.post("/:userId/posts", communityController.createPost);
communityRouter.get("/posts", communityController.getPosts);
communityRouter.get("/:userId/posts", communityController.getPostsByUserId);
communityRouter.get("/posts/:id", communityController.getPostById);
communityRouter.put("/posts/:id", communityController.updatePost);
communityRouter.delete("/posts/:id", communityController.deletePost);

export default communityRouter;
