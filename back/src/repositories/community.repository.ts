import { PrismaClient } from "@prisma/client";

class CommunityRepository {
    prisma = new PrismaClient();

    async createPost(userId: string, postData) {
        const result = await this.prisma.community.create({
            data: {
                ...postData,
                user: {
                    connect: {
                        userId,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return result;
    }
    async findAllPostsN() {
        const result = await this.prisma.community.findMany({
            select: {
                id: true,
                userId: true,
                title: true,
                description: true,
                createdAt: true,
                _count: { select: { reply: true, like: true } },
            },
            orderBy: [{ createdAt: "desc" }],
        });
        await this.prisma.$disconnect();
        return result;
    }
    async findAllPostsP() {
        const result = await this.prisma.community.findMany({
            select: {
                id: true,
                userId: true,
                title: true,
                description: true,
                createdAt: true,
                _count: { select: { reply: true, like: true } },
            },
            orderBy: { like: { _count: "desc" } },
        });
        await this.prisma.$disconnect();
        return result;
    }

    async findPostsByUserId(userId: string) {
        const result = await this.prisma.community.findMany({
            where: { userId },
            select: {
                id: true,
                userId: true,
                title: true,
                description: true,
                createdAt: true,
                _count: { select: { reply: true, like: true } },
            },
            orderBy: { createdAt: "desc" },
        });
        await this.prisma.$disconnect();
        return result;
    }
    async findPostById(id: string) {
        const result = await this.prisma.community.findUnique({
            where: { id: Number(id) },
            select: {
                id: true,
                userId: true,
                title: true,
                description: true,
                createdAt: true,
                _count: { select: { reply: true, like: true } },
            },
        });
        await this.prisma.$disconnect();
        return result;
    }
    async updatePost(id: string, postData) {
        const result = await this.prisma.community.update({
            where: { id: Number(id) },
            data: { ...postData },
        });
        await this.prisma.$disconnect();
        return result;
    }
    async deletePost(id: string) {
        const result = await this.prisma.community.delete({
            where: { id: Number(id) },
        });
        await this.prisma.$disconnect();
        return result;
    }
}

export default new CommunityRepository();
