import { Router, Request, Response, NextFunction } from "express";
import { loginRequired } from "middlewares/authMiddleware";
import CommunityService from "services/community.service";

const communityRouter: Router = Router();

communityRouter.post(
    "/",
    /*
  #swagger.tags=['Community']
  #swagger.summary="커뮤니티 글 작성"
  */
    loginRequired,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const postData = req.body;
            const result = await CommunityService.createPost(postData);
            res.status(201).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
communityRouter.get(
    "/all/:sort",
    /*
  #swagger.tags=['Community']
  #swagger.summary="커뮤니티 글 전체 목록"
  */
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (req.params.sort === "newest") {
                const orderBy = { createdAt: "desc" };
                const result = await CommunityService.getPosts(orderBy);
                res.status(200).json({ data: result });
            }
            if (req.params.sort === "popular") {
                const orderBy = { like: { _count: "desc" } };
                const result = await CommunityService.getPosts(orderBy);
                res.status(200).json({ data: result });
            }
        } catch (error) {
            next(error);
        }
    }
);
communityRouter.get(
    "/my",
    loginRequired,
    /*
  #swagger.tags=['Community']
  #swagger.summary="유저가 작성한 커뮤니티 글 목록"
  */
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const name = req.body.name;
            const result = await CommunityService.getPostsByUserId(name);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
communityRouter.get(
    "/:id",
    /*
  #swagger.tags=['Community']
  #swagger.summary="커뮤니티 특정 글"
  */
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
    loginRequired,
    /*
  #swagger.tags=['Community']
  #swagger.summary="커뮤니티 글 수정"
  */
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
    /*
  #swagger.tags=['Community']
  #swagger.summary="커뮤니티 글 삭제"
  */
    loginRequired,
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
