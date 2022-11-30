import { List, Skeleton } from "antd";
import { useMemo, useState } from "react";
import { useInfiniteFetchComics } from "../api/comics";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useObserver } from "../hooks/UseObserver";
import { ScoreIcon } from "./ScoreIcon";
import { SearchFilter } from "./SearchFilter";
import { getContentStateToString } from "../utils/StringUtils";
import { getFilteredComicLists } from "../utils/FilterUtils";
import { Artist, ComicRankItem, Genre } from "../models";
import "./RankingView.css";

interface Props {
  genre: Genre;
}

const RankingView = ({ genre }: Props) => {
  const [searchValues, setSearchValues] = useState<CheckboxValueType[]>([]);
  const [disabledValues, setDisabledValues] = useState<CheckboxValueType[]>([]);

  const {
    data: result,
    isLoading,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useInfiniteFetchComics(genre);

  const ref = useObserver((observer) => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
      if (ref.current) observer.unobserve(ref.current);
    }
  });

  const list = useMemo<ComicRankItem[]>(
    () =>
      getFilteredComicLists(
        result?.pages.flatMap(({ data }) => data) ?? [],
        searchValues
      ),
    [result, searchValues]
  );

  const onChangeSearchValue = (keywords: CheckboxValueType[]) => {
    setSearchValues(keywords);
    if (keywords.includes("scheduled")) {
      setDisabledValues(["completed"]);
    } else if (keywords.includes("completed")) {
      setDisabledValues(["scheduled"]);
    } else {
      setDisabledValues([]);
    }
  };

  const getArtists = (artists: Artist[]) =>
    artists.reduce((prev, curr) => {
      if (
        curr.role === "writer" ||
        curr.role === "painter" ||
        curr.role === "scripter"
      )
        prev.push(curr.name);
      return prev;
    }, [] as string[]);

  return (
    <div className="rankingView">
      <SearchFilter
        value={searchValues}
        disabled={disabledValues}
        onChange={onChangeSearchValue}
      />
      <List
        className="rank-list"
        grid={{ gutter: 10, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
        size="large"
        dataSource={list}
        renderItem={(item, idx) => (
          <List.Item key={item.id}>
            <Skeleton loading={isLoading} active>
              <div className="rank-item">
                <div className="rank-item-cover">
                  {!isLoading && (
                    <img width={80} alt="thumnail" src={item.thumbnailSrc} />
                  )}
                </div>
                <div className="rank-item-content">
                  <div className="rank-item-rank">
                    <h1>{item.currentRank}</h1>
                    <ScoreIcon
                      score={item.previousRank - item.currentRank ?? 0}
                    />
                  </div>
                  <div className="text">
                    <span>{item.title}</span>
                  </div>
                  <div className="text">{getArtists(item.artists)}</div>
                  <div className="text">{item.freedEpisodeSize}화 무료</div>
                  <div className="text">
                    {getContentStateToString(
                      item.contentsState,
                      item.schedule.periods
                    )}
                  </div>
                </div>
              </div>
            </Skeleton>
          </List.Item>
        )}
      />
      <div ref={ref} />
    </div>
  );
};

export default RankingView;
