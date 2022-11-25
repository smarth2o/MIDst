import { PrismaClient } from "@prisma/client";

class ReplyService {
  prisma = new PrismaClient();

  async createReply(boardId: string, replyData) {
    const { userId, description } = replyData;
    const result = await this.prisma.reply.create({
      data: {
        user: {
          connect: { userId },
        },
        community: {
          connect: { id: Number(boardId) },
        },
        description,
      },
    });
    return result;
  }

  async findAllReplies(boardId: string) {
    const result = await this.prisma.reply.findMany({
      where: { boardId: Number(boardId) },
    });
    return result;
  }

  async findOneReply(id: string) {
    const result = await this.prisma.reply.findUnique({
      where: { id: Number(id) },
    });
    return result;
  }

  async updateReply(id: string, replyData) {
    const result = await this.prisma.reply.update({
      where: { id: Number(id) },
      data: { ...replyData },
    });
    return result;
  }

  async deleteReply(id: string) {
    const result = await this.prisma.reply.delete({
      where: { id: Number(id) },
    });
    return result;
  }
}

export default new ReplyService();
