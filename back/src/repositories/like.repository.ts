import { PrismaClient } from "@prisma/client";

class LikeRepository {
    prisma = new PrismaClient();

    async findLikes(postId: string) {
        const likes = await this.prisma.like.findMany({
            where: { postId: Number(postId) },
            select: {
                id: true,
                postId: true,
                userId: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        const count = await this.prisma.like.aggregate({
            where: { postId: Number(postId) },
            _count: true,
        });
        const result = { likes, count };
        await this.prisma.$disconnect();
        return result;
    }

    async findLike(userId: string, postId: string) {
        const result = await this.prisma.like.findMany({
            where: { AND: [{ userId }, { postId: Number(postId) }] },
        });
        await this.prisma.$disconnect();
        return result;
    }

    async createLike(userId: string, postId: string) {
        const result = await this.prisma.like.create({
            data: {
                user: {
                    connect: { userId },
                },
                community: {
                    connect: { id: Number(postId) },
                },
            },
        });
        await this.prisma.$disconnect();
        return result;
    }

    async deleteLike(userId: string, postId: string) {
        const result = await this.prisma.like.deleteMany({
            where: { userId, postId: Number(postId) },
        });
        await this.prisma.$disconnect();
        return result;
    }
}

export default new LikeRepository();
