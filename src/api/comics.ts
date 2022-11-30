import {
  ComicRankApiFailResponse,
  ComicRankApiSuccessResponse,
  Genre,
} from "../models";
import { getRequestPathName } from "../utils/StringUtils";
import { useFetch, useInfiniteFetch } from "./reactQuery";

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
/*
 *
 * infinite fetch
 *
 */
export const useInfiniteFetchComics = (genre: Genre) => {
  return useInfiniteFetch<ComicRankApiSuccessResponse>(
    getRequestPathName(genre),
    {
      // enabled: false,
      // refetchOnWindowFocus: false,
      getNextPageParam: ({ hasNext }, { length }) => {
        if (hasNext) {
          return length + 1;
        }
        return undefined;
      },
    }
  );
};
