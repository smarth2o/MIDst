import mainController from "../repositories/search.repository";
import axios from "axios";
var express = require("express");
class mainService {
  async showSearch(searchword: string) {
    const searchData = await axios.post("http://127.0.0.1:8080/success", {
      searchword: searchword,
    });

    const result = searchData.data["searchword"];
    return result;
  }

  async saveSearch(userId: string, searchword: string, searchSentence: string) {
    const findSearch = await mainController.find(userId);
    for (var i = 0; i < findSearch.length; i++) {
      if (searchSentence === findSearch[i]["description"]) {
        const errorMessage: string = "이미 저장한 문구입니다.";
        return errorMessage;
      }
    }
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

  async deleteSearch(searchId: string) {
    const deleteSearch = await mainController.delete(searchId);
  }
}
export default new mainService();
