import { atom } from "recoil";

export const titleFilter = atom<any[]>({
  key: "titleFilter",
  default: [],
});

export const nameFilter = atom<any[]>({
  key: "nameFilter",
  default: [],
});
