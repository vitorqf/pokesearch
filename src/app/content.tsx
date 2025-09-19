"use client";

import { Card } from "@/components/card";
import { Search } from "@/components/search";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "react-loading-skeleton/dist/skeleton.css";
import { useDebounce } from "use-debounce";

interface Props {
  pokemons?: HandledPokemon[];
}

export const Content = ({ pokemons }: Props) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const [visiblePokemons, setVisiblePokemons] = useState<HandledPokemon[]>(
    pokemons?.slice(0, 30) || [],
  );

  const { ref } = useInView({
    onChange: (inView) => {
      if (!pokemons) return;
      if (
        inView &&
        visiblePokemons.length < pokemons.length &&
        !debouncedSearch
      ) {
        getMorePokemons(30);
      }
    },
  });

  const getMorePokemons = (offset: number) => {
    setVisiblePokemons((prev) => [
      ...prev,
      ...(pokemons?.slice(prev.length, prev.length + offset) || []),
    ]);
  };

  useEffect(() => {
    if (!pokemons) return;

    if (!debouncedSearch) {
      setVisiblePokemons(pokemons.slice(0, 30));
      return;
    }

    const filtered = pokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        pokemon.redirectTo.toString().includes(debouncedSearch),
    );

    setVisiblePokemons(filtered.slice(0, 30));
  }, [debouncedSearch, pokemons]);

  return (
    <>
      <div className="px-8 sm:px-0 py-10 bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col gap-8 items-center border-b border-b-slate-200">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold">
            <strong className="text-red-500">Poké</strong>Search
          </h2>
          <p className="md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[30vw] text-center text-lg">
            Discover and explore the world of Pokemon. Search through hundreds
            of Pokemon, learn about their types, stats, and abilities.
          </p>
        </div>

        <Search onSearch={setSearch} />
      </div>

      <main className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {visiblePokemons.map((pokemon, index) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            redirectTo={pokemon.redirectTo}
            name={pokemon.name}
            image={pokemon.image}
            ref={index === visiblePokemons.length - 1 ? ref : null}
          />
        ))}
      </main>
    </>
  );
};
