import { List, Skeleton } from "antd";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteFetchComics } from "../api/comics";
import { ComicRankItem, Genre } from "../models";
import "./RankingView.css";

interface Props {
  genre: Genre;
}

const RankingView = ({ genre }: Props) => {
  const [ref, inView] = useInView();

  const {
    data: result,
    isLoading,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useInfiniteFetchComics(genre);

  const list = useMemo<ComicRankItem[]>(
    () => result?.pages.flatMap(({ data }) => data) ?? [],
    [result]
  );

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetching]);

  return (
    <div className="rankingView">
      <List
        grid={{ gutter: 10, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
        size="large"
        dataSource={list}
        renderItem={(item, idx) => (
          <List.Item
            key={item.id}
            ref={list.length - 1 === idx ? ref : undefined}
          >
            <Skeleton loading={isLoading} active>
              <div className="rank-item">
                <div className="rank-item-cover">
                  {!isLoading && (
                    <img width={80} alt="thumnail" src={item.thumbnailSrc} />
                  )}
                </div>
                <div className="rank-item-content">
                  <div className="rank-item-rank">
                    <h2>{item.currentRank}</h2>
                    <h3>{item.previousRank - item.currentRank}</h3>
                  </div>
                  <div className="text">
                    <span>{item.title}</span>
                  </div>
                  <div className="text">
                    {item.artists.map((artist, idx, arr) => (
                      <span key={idx}>
                        {artist.name}
                        {idx < arr.length - 1 && ", "}
                      </span>
                    ))}
                    wtwt
                  </div>
                </div>
              </div>
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default RankingView;
