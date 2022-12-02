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
      date: "2022-10-28",
      title: "I am happy today",
      description: "Because I ate my favorite snack last night.",
    },
    {
      id: 1,
      date: "2022-10-28",
      title: "I saw Harry Potter today",
      description:
        "It was hard to watch because there were so many series. But it was fun.",
    },
    {
      id: 2,
      date: "2022-10-29",
      title: "I saw FRIENDS today",
      description:
        "It was hard to watch because there were so many series. But it was fun.",
    },
    {
      id: 3,
      date: "2022-10-22",
      title: "i feel good today",
      description: "Because I watched my favorite movie last night",
    },
    {
      id: 4,
      date: "2022-10-28",
      title: "I am happy today",
      description: "Because I ate my favorite snack last night.",
    },
    {
      id: 5,
      date: "2022-10-28",
      title: "I saw Harry Potter today",
      description:
        "It was hard to watch because there were so many series. But it was fun.",
    },
    {
      id: 6,
      date: "2022-10-28",
      title: "I saw FRIENDS today",
      description:
        "It was hard to watch because there were so many series. But it was fun.",
    },
    {
      id: 7,
      date: "2022-10-29",
      title: "I saw FRIENDS today",
      description:
        "It was hard to watch because there were so many series. But it was fun.",
    },
    {
      id: 8,
      date: "2022-10-31",
      title: "i feel good today",
      description: "Because I watched my favorite movie last night",
    },
  ],
});

export const diaryCreateState = atom<string>({
  key: "DiaryCreate",
  default: "",
});
