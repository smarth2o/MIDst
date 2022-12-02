import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class mainController{
    //검색한 결과 표출(AI랑 어떻게 연결..?)
    
    //문장 저장
    async create(userId:string,searchword:string,description:string,translation:string){
        const userTosearch=await prisma.usertosearch.create({
            data:{
                userId:userId,
                searchWord:searchword,
                description:description,
                translation:translation,
            }
        })
        return userTosearch
    }
    //저장한거 가져오기
    async find(userId:string){
        const userTosearch=await prisma.usertosearch.findMany({
            where:{
                userId:userId
            },
        })
        return userTosearch;
    }

    //총 저장 개수
    async count(userId:string){
    const count = await prisma.user.findMany({
        where: { 
            userId:userId, 
        },
        select: {
            _count: { select: { usertosearch: true } },
            },

      });
      return count;
    }

    //저장 삭제
    async delete(searchId:number){
        const result = await prisma.usertosearch.delete({
            where: {
                searchId:searchId, 
            },
          });
          return result;
        }
      
    
}
export default new mainController();
