import { motion } from "motion/react";

export default function SpeechBubble() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="absolute top-45 left-2/3 w-40 h-40 z-10"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 말풍선 이미지 */}
        <img
          src="/images/speech-bubble.png"
          alt="말풍선"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* 텍스트 */}
        <span className="relative z-10 text-center text-lg font-semibold -skew-x-6 text-black -rotate-6">
          영화 보자!
        </span>
      </div>
    </motion.div>
  );
}
