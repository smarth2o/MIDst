import { atom } from "recoil";
import { idText } from "typescript";

export interface ReplyType {
  id: number;
  userId: string;
  author: String;
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
      author: "",
      userId: "",
      postId: 0,
      description: "",
      createdAt: "",
      updatedAt: "",
    },
  ],
});
