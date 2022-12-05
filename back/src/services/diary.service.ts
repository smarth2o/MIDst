import DiaryRepository from "repositories/diary.repository";

class DiaryService {
    public createDiary = async (userId: string, diaryData: {}) => {
        const createDiaryData = await DiaryRepository.createDiary(
            userId,
            diaryData
        );
        return createDiaryData;
    };

    public getDiaries = async (userId: string) => {
        const findDiariesData = await DiaryRepository.findDiaries(userId);
        return findDiariesData;
    };

    public getDiaryById = async (id: string) => {
        const findOneDiary = await DiaryRepository.findDiaryById(id);
        return findOneDiary;
    };

    public updateDiary = async (id: string, diaryData: {}) => {
        const updateDiaryData = await DiaryRepository.updateDiary(
            id,
            diaryData
        );
        return updateDiaryData;
    };

    public deleteDiary = async (id: string) => {
        const deleteDiaryData = await DiaryRepository.deleteDiary(id);
        return deleteDiaryData;
    };
}

export default new DiaryService();
