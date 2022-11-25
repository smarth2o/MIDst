import { mainController } from "../controllers/mainController";
class mainService{

    static async saveSearch(userId:string,searchword:string,description:string,translation:string){
        const saveSearch=await mainController.saveSearch(userId,searchword,description,translation);
        return saveSearch;
    
    }
    
    static async findSearch(userId:string){
        const findSearch=await mainController.findSearch(userId);
        return findSearch;

    }

    static async countSearch(userId:string){
        const countSearch=await mainController.countSearch(userId);
        const count=countSearch[0]._count.usertosearch;
        return count;
    }

    static async deleteSearch(searchId:number){
        const deleteSearch=await mainController.deleteSearch(searchId);
    }
    

}
export { mainService };