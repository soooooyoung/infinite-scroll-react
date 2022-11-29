import {
  ComicRankApiFailResponse,
  ComicRankApiSuccessResponse,
  Genre,
} from "../models";
import { getRequestPathName } from "../utils/StringUtils";
import { useFetch } from "./reactQuery";

/*
 *
 * fetch
 *
 */
export const useFetchComics = (page = 1, pageSize = 19, genre: Genre) => {
  return useFetch<ComicRankApiSuccessResponse | ComicRankApiFailResponse>(
    getRequestPathName(genre),
    {
      page,
      pageSize,
    }
  );
};
