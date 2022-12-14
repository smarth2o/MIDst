export type PBCardDataType = {
  userId: number;
  description: string[];
  searchWord: string[];
  grammar: string[];
}[];

const PBCardData: PBCardDataType = [
  {
    userId: 1,
    description: [
      "test",
      "누워서 쉬니깐 너무 좋아요",
      "It feels so good to lie down and rest.",
      "It feels so good to lie down and rest.",
      "It feels so good to lie down and rest.",
      "It feels so good to lie down and rest.",
    ],
    searchWord: [
      "hysterical",
      "hysterical",
      "hysterical",
      "hysterical",
      "hysterical",
    ],
    grammar: [
      "Today I went to school.",
      "Today I went to school.",
      "Today I go to school.",
      "I want to stay in bed all day and sleep.",
      "I want staying in bed all day and sleep.",
      "I want to stay in bed all day and sleep.",
    ],
  },
];

export default PBCardData;
