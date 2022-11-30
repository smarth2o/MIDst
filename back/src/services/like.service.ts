import LikeRepository from "repositories/like.repository";

class LikeService {
    public getLikes = async (postId: string) => {
        const findLikesData = await LikeRepository.findLikes(postId);
        return findLikesData;
    };

    public LikePost = async (userId: string, postId: string) => {
        const likeData = await LikeRepository.findLike(userId, postId);
        if (likeData.length !== 0) {
            await LikeRepository.deleteLike(userId, postId);
            return "cancle";
        }
        await LikeRepository.createLike(userId, postId);
        return "like";
    };
}

export default new LikeService();
