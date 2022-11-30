import { Genre, Period } from "../models";

export const getRequestPathName = (genre: Genre) => {
  return genre.toLocaleLowerCase();
};

export const getDayToString = (period: Period) => {
  switch (period) {
    case "MON":
      return " 월요일";
    case "TUE":
      return " 화요일";
    case "WED":
      return " 수요일";
    case "THU":
      return " 목요일";
    case "FRI":
      return " 금요일";
    case "SAT":
      return " 토요일";
    case "SUN":
      return " 일요일";
  }
};

export const getContentStateToString = (
  state: "scheduled" | "completed",
  periods?: Period[]
) => {
  if (!state) {
    return;
  }
  return state === "scheduled"
    ? `매주${periods?.map((period, idx, arr) => getDayToString(period))} 연재중`
    : "완결";
};
