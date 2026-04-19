import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import MainSection from "../../components/main-section";
import Nav from "../../components/Nav";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  // 전체 스크롤 진행도 (0 ~ 1)
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // 애니메이션 값들
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const scrollToSection = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <main>
      {/* SECTION 1 */}
      <MainSection
        sectionRef={sectionRefs[0]}
        scale={scale}
        opacity={opacity}
        scrollToSection={scrollToSection}
      />

      {/* SECTION 2 */}
      <section
        ref={sectionRefs[1]}
        className="h-screen snap-start flex items-center justify-center bg-blue-200"
      >
        <motion.div style={{ y }} className="text-4xl">
          두 번째 화면 (패럴랙스 느낌)
        </motion.div>
      </section>

      {/* SECTION 3 */}
      <section
        ref={sectionRefs[2]}
        className="h-screen snap-start flex items-center justify-center bg-green-200"
      >
        <div className="text-4xl">세 번째 화면</div>
      </section>
    </main>
  );
}
