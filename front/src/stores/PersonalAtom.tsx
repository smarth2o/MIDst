import { atom, atomFamily } from "recoil";

const CloudEmp = require("../assets/cloudEmp.png");

export const cloudIconState = atom<string>({
  key: "imageState",
  default: CloudEmp,
});
