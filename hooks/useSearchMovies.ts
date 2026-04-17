import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../services/api/movie";
import { movieKeys } from "../services/query-keys";

export default function useSearchMovies(query: string, page: number) {
  return useQuery({
    queryKey: movieKeys.search(query, page),
    queryFn: () => movieApi.search(query, page),
    enabled: !!query, // 검색어 없으면 실행 안 함
  });
}
