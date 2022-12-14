import { atom } from "recoil";

export const Searchword = atom({
  key: "Searchword",
  default: "",
});

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
