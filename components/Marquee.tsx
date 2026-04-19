import { motion } from "framer-motion";
import { getImageUrl } from "../lib/utils";
import type { Movie } from "../types/movies";

interface Props {
  movies: Movie[];
}

export default function Marquee({ movies }: Props) {
  const loopMovies = [...movies, ...movies];
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="absolute top-1/2 left-0 w-full -translate-y-1/2"
    >
      <div className="w-full overflow-hidden ">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // 속도 조절
          }}
        >
          {loopMovies.map((movie, i) => (
            <img
              key={`${movie.id}-${i}`}
              src={getImageUrl(movie.backdrop_path)}
              className="brightness-75"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
