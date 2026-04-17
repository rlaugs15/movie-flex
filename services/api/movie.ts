import { fetchJson } from "../../lib/utils";
import type { MovieDetail, MovieListResponse } from "../../types/movies";

const BASE_PARAMS = "language=ko-KR";

export const movieApi = {
  nowPlaying: (page = 1) =>
    fetchJson<MovieListResponse>(`movie/now_playing?${BASE_PARAMS}&page=${page}`),

  popular: (page = 1) => fetchJson<MovieListResponse>(`movie/popular?${BASE_PARAMS}&page=${page}`),

  topRated: (page = 1) =>
    fetchJson<MovieListResponse>(`movie/top_rated?${BASE_PARAMS}&page=${page}`),

  upcoming: (page = 1) =>
    fetchJson<MovieListResponse>(`movie/upcoming?${BASE_PARAMS}&page=${page}`),

  search: (query: string, page = 1) =>
    fetchJson<MovieListResponse>(
      `search/movie?query=${query}&include_adult=true&${BASE_PARAMS}&page=${page}`,
    ),

  detail: (movieId: number) => fetchJson<MovieDetail>(`movie/${movieId}?${BASE_PARAMS}`),
};
