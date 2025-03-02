import { DEBOUNCE_DELAY } from "@/constants";
import { useDebounce } from "@/hooks/useDebounce";
import { FC, useState } from "react";

interface SearchBarProps {
  placeholder: string;
  onSearch: (value: string) => void;
}
export const SearchBar: FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [value, setValue] = useState("");
  useDebounce(value, onSearch, DEBOUNCE_DELAY);

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 border rounded-md"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
