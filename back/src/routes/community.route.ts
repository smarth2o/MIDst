import { Router, Request, Response, NextFunction } from "express";
import CommunityService from "services/community.service";

const communityRouter: Router = Router();

communityRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: any = req.headers["currentUserId"];
      const postData = req.body;
      const result = await CommunityService.createPost(userId, postData);
      res.status(201).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);
communityRouter.get(
  "/all",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await CommunityService.getPosts();
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);
communityRouter.get(
  "/my",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: any = req.headers["currentUserId"];
      const result = await CommunityService.getPostsByUserId(userId);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);
communityRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const result = await CommunityService.getPostById(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);
communityRouter.put(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const postData = req.body;
      const result = await CommunityService.updatePost(id, postData);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);
communityRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const result = await CommunityService.deletePost(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);

export default communityRouter;
