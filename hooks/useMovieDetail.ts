import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../services/api/movie";
import { movieKeys } from "../services/query-keys";

export default function useMovieDetail(movieId: number) {
  return useQuery({
    queryKey: movieKeys.detail(movieId),
    queryFn: () => movieApi.detail(movieId),
    enabled: !!movieId,
  });
}
