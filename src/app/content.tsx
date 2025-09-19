"use client";

import { Card } from "@/components/card";
import { getPokemons } from "@/services/get-pokemons";
import { useInfiniteQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  initialData?: any;
}

export const Content = ({ initialData }: Props) => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["pokemons"],
      queryFn: () => getPokemons({ limit: 50 }),
      initialData: {
        pages: [initialData],
        pageParams: [undefined],
      },
      getNextPageParam: (lastPage) => lastPage?.next ?? undefined,
      initialPageParam: undefined,
    });

  const pokemons = data?.pages.flatMap((page) => page.results);

  if (isLoading) {
    return Array.from({ length: 20 }).map((_, index) => (
      <Skeleton
        key={index}
        className="w-full rounded-lg"
        baseColor="#e2e8f0"
        highlightColor="#f1f5f9"
        height={200}
      />
    ));
  }

  return (
    <>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          redirectTo={pokemon.redirectTo}
          name={pokemon.name}
          image={pokemon.image}
        />
      ))}
    </>
  );
};
