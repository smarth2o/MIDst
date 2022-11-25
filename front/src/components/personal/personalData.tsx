export type PBCardDataType = {
  user_id: number;
  expressions: string[];
  words: string[];
  grammar: string[];
}[];

const PBCardData: PBCardDataType = [
  {
    user_id: 1,
    expressions: [
      "test",

      "누워서 쉬니간 너무 좋아요",
      "It feels so good to lie down and rest.",
      "It feels so good to lie down and rest.",
      "It feels so good to lie down and rest.",
      "It feels so good to lie down and rest.",
    ],
    words: [
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
