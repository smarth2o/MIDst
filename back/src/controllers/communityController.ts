import { NextFunction, Request, Response } from "express";
import CommunityService from "services/communityService";

class CommunityController {
  public createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.params.userId;
      const postData = req.body;
      const createPostData = await CommunityService.createPost(
        userId,
        postData
      );
      res.status(201).json({ data: createPostData, message: "created" });
    } catch (error) {
      next(error);
    }
  };

  public getPosts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const findAllPostsData = await CommunityService.findAllPosts();
      res.status(200).json({ data: findAllPostsData, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  public getPostsByUserId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.params.userId;
      const findUsersPostsData = await CommunityService.findPostsByUserId(
        userId
      );
      res
        .status(200)
        .json({ data: findUsersPostsData, message: "findAllByUserId" });
    } catch (error) {
      next(error);
    }
  };

  public getPostById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id;
      const findOnediary = await CommunityService.findPostById(id);
      res.status(200).json({ data: findOnediary, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  public updatePost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id;
      const postData = req.body;
      const updatePostData = await CommunityService.updatePost(id, postData);
      res.status(200).json({ data: updatePostData, message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  public deletePost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id;
      const deletePostData = await CommunityService.deletePost(id);
      res.status(200).json({ data: deletePostData, message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}

export default new CommunityController();
