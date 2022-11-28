import { ComicRankItem } from "..";

export interface ComicRankApiSuccessResponse {
  hasNext: boolean; // 다음 page 존재 여부
  count: number; // 아이템 전체 카운트
  data: ComicRankItem[]; // 아이템 리스트
}
export interface ComicRankApiFailResponse {
  error: string; // 에러 메세지
}
