import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 bg-black w-80 h-40 pl-10 gap-1 rounded-br-full flex items-center">
      {/* 햄버거 */}
      <button>
        <GiHamburgerMenu size={30} />
      </button>
      <span className="font-bold">어떤 영화를 볼까?</span>
    </header>
  );
}
