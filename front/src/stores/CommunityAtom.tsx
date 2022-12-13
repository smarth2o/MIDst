import { atom } from "recoil";

export interface CommunityType {
  id: number;
  author: string;
  title: string;
  description: string;
  createdAt: string;
  _count: {
    reply: number;
    like: number;
  };
}

export const communityState = atom<CommunityType[]>({
  key: "ComunityPost",
  default: [
    {
      id: 0,
      author: "",
      title: "",
      description: "",
      createdAt: "",
      _count: {
        reply: 0,
        like: 0,
      },
    },
  ],
});
