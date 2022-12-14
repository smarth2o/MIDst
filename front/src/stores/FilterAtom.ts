import { atom } from "recoil";

interface SearchResultType {
  id: number;
  title: string;
  name: string;
  script: string;
  precision?: number;
}

export const SearchResults = atom<SearchResultType[]>({
  key: "SearchResults",
  default: [
    {
      id: 0,
      title: "",
      name: "",
      script: "",
      precision: 0,
    },
  ],
});
