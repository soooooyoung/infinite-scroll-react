import { CheckboxValueType } from "antd/es/checkbox/Group";
import { ComicRankItem } from "../models";

export const getFilteredComicLists = (
  list: ComicRankItem[],
  keywords: CheckboxValueType[]
) => {
  const newlist = list.filter((item) => {
    if (keywords.includes("scheduled") && item.contentsState !== "scheduled") {
      return false;
    }
    if (keywords.includes("completed") && item.contentsState !== "completed") {
      return false;
    }
    if (keywords.includes("freeEp") && item.freedEpisodeSize < 3) {
      return false;
    }
    return true;
  });
  return newlist;
};
