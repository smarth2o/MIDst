import axios from "axios";
import DiaryRepository from "repositories/diary.repository";

class EmotionService {
    public checkEmotion = async (id, description) => {
        const checkEmotion = await axios.post("http://127.0.0.1:8080/predict", {
            feeling: description,
        });

        const result = await DiaryRepository.updateDiary(id, {
            emotion: checkEmotion["data"]["emotion"],
        });

        return result;
    };
}

export default new EmotionService();
