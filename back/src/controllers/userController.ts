import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class userController{
    //회원가입
    static async registerUser(userId:string, email:string,  password:string, name:string){
        const newUser=await prisma.user.create({
            data:{
                userId:userId,
                email:email,
                password:password,
                name:name,
                withdrawal:0,
            },
            include:{
                refreshtoken:true,
                diary:true,
                community:true,
                reply:true,
                usertosearch:true,
            },
        })
        return newUser;
    }

    //token생성
    static async createToken(userId:string) {
        const token = await prisma.refreshtoken.create({
          data: {
            refreshToken: "refresh",
            user: {
              connect: { userId: userId },
            },
          },
        });
      }
    
    //토큰 업데이트
    static async tokenUpdate(userId:string, refreshToken:string) {
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
    static async findByEmail(email:string){
        const UserbyEmail=await prisma.user.findMany({
            where:{
                email:email
            },
            orderBy: {
                withdrawal: "asc",
              },
        
        })
        return UserbyEmail
    }

    //userId로 유저찾기
    static async findByUserId(userId:string){
        const UserbyUserId=await prisma.user.findMany({
            where:{
                userId:userId
            }
        })
        return UserbyUserId
    }

    //유저 정보 수정
    static async updateUser(userId:string,name:string){
        const updateUser=await prisma.user.update({
            where:{
                userId:userId,
            },
            data:{
                name:name,
            },
        });
        return updateUser;
    }

    //회원탈퇴
    static async updateWithdrawal(userId:string, updatewithdrawal:number){
        const updateWithdrawal=await prisma.user.update({
            where:{
                userId:userId,
            },
            data:{
                withdrawal:updatewithdrawal,
            },
        });
        return updateWithdrawal;
    }
}
export { userController };
