import { GiHamburgerMenu } from "react-icons/gi";
import { useNavStore } from "../store/useNavStore";

export default function Header() {
  const toggleNav = useNavStore((state) => state.toggleNav);
  return (
    <header className="z-30 fixed top-0 left-0 bg-black w-80 h-40 pl-10 gap-1 rounded-br-full flex items-center">
      {/* 햄버거 */}
      <button
        onClick={toggleNav}
        className="w-8 h-8 flex items-center justify-center transition-transform duration-200 hover:scale-[1.2]"
      >
        <GiHamburgerMenu className="w-full h-full" />
      </button>
      <span className="font-bold">어떤 영화를 볼까?</span>
    </header>
  );
}
