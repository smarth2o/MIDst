import LikeRepository from "repositories/like.repository";

class LikeService {
  public getLikes = async (boardId: string) => {
    const findLikesData = await LikeRepository.findLikes(boardId);
    return findLikesData;
  };

  public LikePost = async (boardId: string, userId: string) => {
    const likeData = await LikeRepository.findLike(boardId, userId);
    if (likeData.length !== 0) {
      await LikeRepository.deleteLike(boardId, userId);
      return "cancle";
    }
    await LikeRepository.createLike(boardId, userId);
    return "like";
  };
}

export default new LikeService();
