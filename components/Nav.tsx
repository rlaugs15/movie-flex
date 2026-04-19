import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useNavStore } from "../store/useNavStore";

interface Props {
  scrollToSection: (index: number) => void;
}

export default function Nav({ scrollToSection }: Props) {
  const { isOpen, closeNav } = useNavStore();

  // 현재 hover 중인 버튼 index
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menus = [
    { text: "메인화면", color: "text-green-400", index: 0 },
    { text: "인기작", color: "text-blue-400", index: 1 },
    { text: "최신영화", color: "text-white", index: 2 },
  ];

  const handleMove = (index: number) => {
    scrollToSection(index);
    closeNav();
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.nav
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="z-20 fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center"
        >
          <section className="flex flex-col items-center gap-10 text-5xl font-bold">
            {menus.map((menu, index) => {
              const isHovered = hoveredIndex === index;
              const isOther = hoveredIndex !== null && hoveredIndex !== index;

              return (
                <motion.button
                  key={menu.text}
                  onClick={() => handleMove(menu.index)}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  animate={{
                    scale: isHovered ? 1.1 : isOther ? 0.8 : 1,
                    opacity: isOther ? 0.35 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`${menu.color} cursor-pointer`}
                >
                  {menu.text}
                </motion.button>
              );
            })}
          </section>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
