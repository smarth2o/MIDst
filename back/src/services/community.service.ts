import { NextFunction, Request, Response } from "express";
import CommunityRepository from "repositories/community.repository";

class CommunityService {
  public createPost = async (userId: string, postData: {}) => {
    const createPostData = await CommunityRepository.createPost(
      userId,
      postData
    );
    return createPostData;
  };

  public getPosts = async () => {
    const findAllPostsData = await CommunityRepository.findAllPosts();
    return findAllPostsData;
  };

  public getPostsByUserId = async (userId: string) => {
    const findUsersPostsData = await CommunityRepository.findPostsByUserId(
      userId
    );
    return findUsersPostsData;
  };

  public getPostById = async (id: string) => {
    const findOnediary = await CommunityRepository.findPostById(id);
    return findOnediary;
  };

  public updatePost = async (id: string, postData: {}) => {
    const updatePostData = await CommunityRepository.updatePost(id, postData);
    return updatePostData;
  };

  public deletePost = async (id: string) => {
    const deletePostData = await CommunityRepository.deletePost(id);
    return deletePostData;
  };
}

export default new CommunityService();
