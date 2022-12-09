import mainController from "../repositories/search.repository";
import axios from "axios";
var express = require('express');
class mainService {

  async showSearch(searchword:string,title:string,name:string){
    const searchData = await axios.post("http://127.0.0.1:8080/success", {
        searchword: searchword,
        title:title,
        name:name
      });

      const result=searchData.data["searchword"];
      // var i;
      // var word=[]
      // for(i=0;i<result.length;i++){
      //   word[i]=result[i].split(" - ")

      // }
      console.log(result);
      return result;
  }

  async saveSearch(userId: string,searchword: string,searchSentence: string) {
    const saveSearch = await mainController.create(
      userId,
      searchword,
      searchSentence
    );
    return saveSearch;
  }

  async findSearch(userId: string) {
    const findSearch = await mainController.find(userId);
    return findSearch;
  }

  async countSearch(userId: string) {
    const countSearch = await mainController.count(userId);
    const count = countSearch[0]._count.usertosearch;
    return count;
  }

  async deleteSearch(searchId: number) {
    const deleteSearch = await mainController.delete(searchId);
  }
}
export default new mainService();
