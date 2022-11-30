import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class userController {
    //회원가입
    async registerUser(
        userId: string,
        email: string,
        password: string,
        name: string
    ) {
        const newUser = await prisma.user.create({
            data: {
                userId: userId,
                email: email,
                password: password,
                name: name,
                withdrawal: 0,
            },
            include: {
                refreshtoken: true,
                diary: true,
                community: true,
                reply: true,
                usertosearch: true,
            },
        });
        return newUser;
    }

    //token생성
    async createToken(userId: string) {
        const token = await prisma.refreshtoken.create({
            data: {
                refreshToken: "refresh",
                user: {
                    connect: { userId: userId },
                },
            },
        });
    }
    //refesh token 검증
    async checkToken(refreshToken) {
        const result = await prisma.refreshtoken.findMany({
            where: { refreshToken },
        });
        if (result.length === 0) {
            await prisma.$disconnect();
            return false;
        }
        await prisma.$disconnect();
        return result[0];
    }
    //토큰 업데이트
    async tokenUpdate(userId: string, refreshToken: string) {
        const token = await prisma.refreshtoken.update({
            where: {
                userId: userId,
            },
            data: {
                refreshToken: refreshToken,
            },
        });
        return token;
    }

    //이메일로 유저찾기
    async findByEmail(email: string) {
        const UserbyEmail = await prisma.user.findMany({
            where: {
                email: email,
            },
            orderBy: {
                withdrawal: "asc",
            },
        });
        return UserbyEmail;
    }

    //userId로 유저찾기
    async findByUserId(userId: string) {
        const UserbyUserId = await prisma.user.findMany({
            where: {
                userId: userId,
            },
        });
        return UserbyUserId;
    }

    //유저 이름 정보 수정
    async updateUser(userId: string, name: string) {
        const updateUser = await prisma.user.update({
            where: {
                userId: userId,
            },
            data: {
                name: name,
            },
        });
        return updateUser;
    }

    //비밀번호 재발급
    async updatePassword(userId: string, password: string) {
        const updateUser = await prisma.user.update({
            where: {
                userId: userId,
            },
            data: {
                password: password,
            },
        });
        return updateUser;
    }

    //회원탈퇴
    async updateWithdrawal(userId: string, updatewithdrawal: number) {
        const updateWithdrawal = await prisma.user.update({
            where: {
                userId: userId,
            },
            data: {
                withdrawal: updatewithdrawal,
            },
        });
        return updateWithdrawal;
    }
}

export default new userController();
