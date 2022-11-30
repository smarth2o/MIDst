import mainController from "../repositories/search.repository";
class mainService {
  async saveSearch(
    userId: string,
    searchword: string,
    description: string,
    translation: string
  ) {
    const saveSearch = await mainController.create(
      userId,
      searchword,
      description,
      translation
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
