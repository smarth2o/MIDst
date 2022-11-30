import { PrismaClient } from "@prisma/client";

class ReplyRepository {
    prisma = new PrismaClient();

    async createReply(userId: string, postId: string, replyData) {
        const result = await this.prisma.reply.create({
            data: {
                user: {
                    connect: { userId },
                },
                community: {
                    connect: { id: Number(postId) },
                },
                ...replyData,
            },
        });
        await this.prisma.$disconnect();
        return result;
    }

    async findAllReplies(postId: string) {
        const result = await this.prisma.reply.findMany({
            where: { postId: Number(postId) },
            orderBy: { createdAt: "desc" },
        });
        await this.prisma.$disconnect();
        return result;
    }

    async findOneReply(id: string) {
        const result = await this.prisma.reply.findUnique({
            where: { id: Number(id) },
        });
        await this.prisma.$disconnect();
        return result;
    }

    async updateReply(id: string, replyData) {
        const result = await this.prisma.reply.update({
            where: { id: Number(id) },
            data: { ...replyData },
        });
        await this.prisma.$disconnect();
        return result;
    }

    async deleteReply(id: string) {
        const result = await this.prisma.reply.delete({
            where: { id: Number(id) },
        });
        await this.prisma.$disconnect();
        return result;
    }
}

export default new ReplyRepository();
