import { useCallback, useState } from "react";
import { SetterOrUpdater } from "recoil";
import { DiaryTypes } from "../../stores/DiaryAtom";

export interface DiaryPropsTypes {
  id: number;
  title: string;
  description: string;
  date: string;
  diarys: DiaryTypes[];
  setDiarys: SetterOrUpdater<DiaryTypes[]>;
}

const DiaryDetailCard = ({
  id,
  date,
  title,
  description,
  diarys,
  setDiarys,
}: DiaryPropsTypes): JSX.Element => {
  return <>{title}</>;
};

export default DiaryDetailCard;
