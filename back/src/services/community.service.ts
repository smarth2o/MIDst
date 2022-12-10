import CommunityRepository from "repositories/community.repository";

class CommunityService {
    public createPost = async (postData: {}) => {
        const createPostData = await CommunityRepository.createPost(postData);
        return createPostData;
    };

    public getPosts = async (orderBy) => {
        const findAllPostsData = await CommunityRepository.findAllPosts(
            orderBy
        );
        return findAllPostsData;
    };

    public getPostsByUserId = async (name: string) => {
        const findUsersPostsData = await CommunityRepository.findPostsByUserId(
            name
        );
        return findUsersPostsData;
    };

    public getPostById = async (id: string) => {
        const findOnediary = await CommunityRepository.findPostById(id);
        return findOnediary;
    };

    public updatePost = async (id: string, postData: {}) => {
        const updatePostData = await CommunityRepository.updatePost(
            id,
            postData
        );
        return updatePostData;
    };

    public deletePost = async (id: string) => {
        const deletePostData = await CommunityRepository.deletePost(id);
        return deletePostData;
    };
}

export default new CommunityService();
