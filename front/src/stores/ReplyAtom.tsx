import { atom } from "recoil";
import { idText } from "typescript";

export interface ReplyType {
  id: number;
  userId: string;
  postId: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const replyState = atom<ReplyType[]>({
  key: "reply",
  default: [
    {
      id: 0,
      userId: "9f215230-70c6-11ed-9305-09f6ced2f775",
      postId: 0,
      description: "오 그렇군요",
      createdAt: "2022-11-30T17:11:01.976Z",
      updatedAt: "2022-11-30T17:11:01.976Z",
    },
    {
      id: 0,
      userId: "9f215230-70c6-11ed-9305-09f6ced2f775",
      postId: 1,
      description: "도움되는 글 감사합니다.",
      createdAt: "2022-11-30T17:11:01.976Z",
      updatedAt: "2022-11-30T17:11:01.976Z",
    },
  ],
});
