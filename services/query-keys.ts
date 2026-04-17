export const movieKeys = {
  all: ["movies"] as const,

  // 리스트 그룹
  lists: () => [...movieKeys.all, "list"] as const,

  nowPlaying: (page: number) => [...movieKeys.lists(), "nowPlaying", page] as const,

  popular: (page: number) => [...movieKeys.lists(), "popular", page] as const,

  topRated: (page: number) => [...movieKeys.lists(), "topRated", page] as const,

  upcoming: (page: number) => [...movieKeys.lists(), "upcoming", page] as const,

  search: (query: string, page: number) => [...movieKeys.lists(), "search", query, page] as const,

  // 상세 그룹
  details: () => [...movieKeys.all, "detail"] as const,

  detail: (movieId: number) => [...movieKeys.details(), movieId] as const,
};
