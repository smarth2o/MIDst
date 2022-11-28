import { PrismaClient } from "@prisma/client";

class LikeService {
  prisma = new PrismaClient();

  async findLikes(boardId: string) {
    const likeCount = await this.prisma.like.aggregate({
      where: { boardId: Number(boardId) },
      _count: true,
    });
    const result = { count: likeCount._count };
    await this.prisma.$disconnect();
    return result;
  }

  async findLike(boardId: string, userId: string) {
    const result = await this.prisma.like.findMany({
      where: { AND: [{ userId }, { boardId: Number(boardId) }] },
    });
    await this.prisma.$disconnect();
    return result;
  }

  async createLike(boardId: string, userId: string) {
    const result = await this.prisma.like.create({
      data: {
        user: {
          connect: { userId },
        },
        community: {
          connect: { id: Number(boardId) },
        },
      },
    });
    await this.prisma.$disconnect();
    return result;
  }

  async deleteLike(boardId: string, userId: string) {
    const result = await this.prisma.like.deleteMany({
      where: { userId, boardId: Number(boardId) },
    });
    await this.prisma.$disconnect();
    return result;
  }
}

export default new LikeService();
