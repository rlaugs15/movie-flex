import usePopularMovies from "../../hooks/usePopularMovies";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { data } = usePopularMovies(1);
  console.log(data);

  return <div>home</div>;
}
