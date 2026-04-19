import { motion, MotionValue } from "motion/react";
import { FaArrowDownLong } from "react-icons/fa6";
import usePopularMovies from "../hooks/usePopularMovies";
import Marquee from "./Marquee";
import SpeechBubble from "./SpeechBubble";

interface Props {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  scrollToSection: (index: number) => void;
}

export default function MainSection({ sectionRef, opacity, scale, scrollToSection }: Props) {
  const { data } = usePopularMovies(1);

  return (
    <section ref={sectionRef} className="relative h-screen">
      <motion.div style={{ opacity, scale }}></motion.div>
      <SpeechBubble />
      <Marquee movies={data?.results || []} />
      <button
        onClick={() => scrollToSection(1)}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 w-60 h-20 rounded-4xl bg-green-500"
      >
        <span className="font-semibold">클릭해주세요!</span>
      </button>
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaArrowDownLong size={50} />
      </motion.div>
    </section>
  );
}
