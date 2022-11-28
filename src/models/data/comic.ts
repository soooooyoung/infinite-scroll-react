import { Artist } from "..";

// 연재 요일
type Period = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

export interface ComicRankItem {
  id: number; // 작품 id
  alias: string; // 작품 별칭
  title: string; // 작품 타이틀
  artists: Artist[]; // 작가 정보
  schedule: {
    periods: Period[]; // 연재 요일
  };
  genres: string[]; // 작품 장르
  freedEpisodeSize: number; // 무료회차 수
  contentsState: "scheduled" | "completed"; // 연재, 완결 값
  currentRank: number; // 현재 랭킹
  previousRank: number; // 이전 랭킹

  updatedAt: number; // 업데이트 일자
  print: boolean; // 단행본 여부
  thumbnailSrc: string; // 작품 썸네일 url
}
