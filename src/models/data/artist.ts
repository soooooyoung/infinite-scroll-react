// 작가 롤
type ArtistRole =
  | "writer"
  | "painter"
  | "scripter"
  | "original"
  | "publisher"
  | "label";
export interface Artist {
  name: string; // 작가 필명
  role: ArtistRole; // 작가 롤
  id: string; // 작가 id
}
