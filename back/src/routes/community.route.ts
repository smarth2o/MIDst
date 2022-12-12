import { Router, Request, Response, NextFunction } from "express";
import { loginRequired } from "middlewares/authMiddleware";
import CommunityService from "services/community.service";

const communityRouter: Router = Router();

communityRouter.post(
    "/",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const postData: {
                name: string;
                title: string;
                description: string;
            } = req.body;
            const result = await CommunityService.createPost(postData);
            res.status(201).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
communityRouter.get(
    "/all/:sort",
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
    "/my/:name",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const name: string = req.params.name;
            const result = await CommunityService.getPostsByUserId(name);
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
            const id: string = req.params.id;
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
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id;
            const postData: { title?: string; description?: string } = req.body;
            const result = await CommunityService.updatePost(id, postData);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);
communityRouter.delete(
    "/:id",
    loginRequired,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id;
            const result = await CommunityService.deletePost(id);
            res.status(200).json({ data: result });
        } catch (error) {
            next(error);
        }
    }
);

export default communityRouter;
