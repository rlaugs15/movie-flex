export async function fetchJson<T>(url: string): Promise<T> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_ACCECSS_TOKEN}`,
    },
  };
  const res = await fetch(`https://api.themoviedb.org/3/${url}`, options);

  if (!res.ok) throw new Error("error");

  return res.json();
}

export const getImageUrl = (path: string | null) => {
  if (!path) return "/no-image.png";
  return `https://image.tmdb.org/t/p/w500${path}`;
};
