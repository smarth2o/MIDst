import { PrismaClient } from "@prisma/client";

class CommunityRepository {
    prisma = new PrismaClient();

    async createPost(postData) {
        const { name, title, description } = postData;
        const result = await this.prisma.community.create({
            data: {
                title,
                description,
                user: {
                    connect: {
                        name,
                    },
                },
            },
        });
        await this.prisma.$disconnect();
        return result;
    }
    async findAllPosts(orderBy) {
        const result = await this.prisma.community.findMany({
            select: {
                id: true,
                author: true,
                title: true,
                description: true,
                createdAt: true,
                _count: { select: { reply: true, like: true } },
            },
            orderBy: [orderBy],
        });

        await this.prisma.$disconnect();
        return result;
    }

    async findPostsByUserId(name: string) {
        const result = await this.prisma.community.findMany({
            where: { author: name },
            select: {
                id: true,
                author: true,
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
                author: true,
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
