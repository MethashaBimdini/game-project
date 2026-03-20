import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import type { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

interface FetchGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) => {
  const [data, setData] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  // When filters change, reset data and page
  useEffect(() => {
    setData([]);
    setPage(1);
    setHasNextPage(false);
  }, [gameQuery.genre, gameQuery.platform, gameQuery.sortOrder, gameQuery.searchText]);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: page,
        },
        signal: controller.signal,
      })
      .then((res) => {
        setData((prev) => (page === 1 ? res.data.results : [...prev, ...res.data.results]));
        setHasNextPage(res.data.next !== null);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [gameQuery.genre, gameQuery.platform, gameQuery.sortOrder, gameQuery.searchText, page]);

  return { Data: data, error, isLoading, fetchNextPage: () => setPage((p) => p + 1), hasNextPage };
};

export default useGames;