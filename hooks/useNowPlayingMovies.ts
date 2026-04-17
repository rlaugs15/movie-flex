import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../services/api/movie";
import { movieKeys } from "../services/query-keys";

export default function useNowPlayingMovies(page: number) {
  return useQuery({
    queryKey: movieKeys.nowPlaying(page),
    queryFn: () => movieApi.nowPlaying(page),
  });
}
