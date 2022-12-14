import { atom } from "recoil";

interface User {
  name: string | null;
  email: string | null;
  id: string | null;
}

const userState = atom<User | null>({
  key: "userState",
  default: null,
});

export default userState;
