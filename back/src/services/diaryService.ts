import { PrismaClient } from "@prisma/client";

class DiaryService {
  prisma = new PrismaClient();

  async createDiary(userId: string, diaryData) {
    const result = await this.prisma.diary.create({
      data: {
        ...diaryData,
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
  async findDiaries(userId: string) {
    const result = await this.prisma.diary.findMany({
      where: { userId },
    });
    await this.prisma.$disconnect();
    return result;
  }
  async findDiaryById(id: string) {
    const result = await this.prisma.diary.findUnique({
      where: { id: Number(id) },
    });
    await this.prisma.$disconnect();
    return result;
  }

  async updateDiary(id: string, diaryData) {
    const result = await this.prisma.diary.update({
      where: { id: Number(id) },
      data: { ...diaryData },
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
