import { atom } from "recoil";

export interface DiaryTypes {
  id: number;
  date: string;
  title: string;
  description: string;
}

export const diaryState = atom<DiaryTypes[]>({
  key: "DiaryDetail",
  default: [
    {
      id: 0,
      date: "",
      title: "",
      description: "",
    },
  ],
});
