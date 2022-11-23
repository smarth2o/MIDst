import { PrismaClient } from "@prisma/client";

class DiaryService {
  prisma = new PrismaClient();

  async createDiary(
    userId: string,
    title: string,
    description: string,
    emotion: string
  ) {
    const result = await this.prisma.diary.create({
      data: {
        title,
        description,
        emotion,
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
  async getDiary(userId: string, id: string) {
    if (!id) {
      const result = await this.prisma.diary.findMany({
        where: { userId },
      });
      await this.prisma.$disconnect();
      return result;
    }
    if (!userId) {
      const result = await this.prisma.diary.findUnique({
        where: { id: Number(id) },
      });
      await this.prisma.$disconnect();
      return result;
    }
  }

  async editDiary(
    id: string,
    title: string,
    description: string,
    emotion: string
  ) {
    const result = await this.prisma.diary.update({
      where: { id: Number(id) },
      data: { title, description, emotion },
    });
    await this.prisma.$disconnect();
    return result;
  }

  async deleteDiary(id: string) {
    const result = await this.prisma.diary.delete({
      where: { id: Number(id) },
    });
    await this.prisma.$disconnect();
    return result;
  }
}

export default new DiaryService();
