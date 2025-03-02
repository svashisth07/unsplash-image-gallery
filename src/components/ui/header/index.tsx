import { FC } from "react";
import { SearchBar } from "../search-bar";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import { Z_INDEX } from "@/constants";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header: FC<HeaderProps> = ({ onSearch }) => {
  const scrollY = useWindowScroll();

  const maxScroll = 100;
  const opacity = Math.max(1 - scrollY / maxScroll, 0.9);

  return (
    <header
      className={`z-[${Z_INDEX.HEADER}] sticky top-0 flex items-center p-4 transition-background duration-300`}
      style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
    >
      <h1 className="text-2xl font-bold min-w-1/2">
        Searchable infinite scroll picture gallery
      </h1>
      <SearchBar placeholder="Search for images" onSearch={onSearch} />
    </header>
  );
};
