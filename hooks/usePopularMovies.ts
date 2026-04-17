import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../services/api/movie";
import { movieKeys } from "../services/query-keys";

export default function usePopularMovies(page: number) {
  return useQuery({
    queryKey: movieKeys.popular(page),
    queryFn: () => movieApi.popular(page),
  });
}
