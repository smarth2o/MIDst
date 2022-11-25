import { PrismaClient } from "@prisma/client";

class CommunityService {
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
  async findAllPosts() {
    const result = await this.prisma.community.findMany({});
    await this.prisma.$disconnect();
    return result;
  }
  async findPostsByUserId(userId: string) {
    const result = await this.prisma.community.findMany({ where: { userId } });
    await this.prisma.$disconnect();
    return result;
  }
  async findPostById(id: string) {
    const result = await this.prisma.community.findUnique({
      where: { id: Number(id) },
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

export default new CommunityService();
