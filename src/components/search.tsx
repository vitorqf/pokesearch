"use client";

import Image from "next/image";

interface Props {
  onSearch: (query: string) => void;
}

export const Search = ({ onSearch }: Props) => {
  return (
    <div className="w-full sm:w-fit flex items-center gap-2 border border-slate-300 shadow bg-slate-50 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-300 transition duration-150">
      <Image
        className="pointer-events-none"
        src="/icons/search.svg"
        alt="Search Icon"
        width={20}
        height={20}
      />
      <input
        type="text"
        placeholder="Search Pokémon by name or ID..."
        className="w-full sm:w-88 focus:outline-0"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
