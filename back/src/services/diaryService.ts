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
    const diaryDatas = await this.prisma.diary.findMany({
      where: { userId },
    });
    const count = await this.prisma.user.findMany({
      where: { userId },
      select: {
        _count: { select: { diary: true } },
      },
    });
    await this.prisma.$disconnect();
    const result = { ...diaryDatas, count: count[0]._count.diary };
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
