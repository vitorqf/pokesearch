import { getPokemons } from "@/services/get-pokemons";
import Image from "next/image";
import { Content } from "./content";

export default async function Home() {
  const initialPokemons = await getPokemons({ limit: 50 });

  return (
    <>
      <div className="py-10 bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col gap-8 items-center border-b border-b-slate-200">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold">
            <strong className="text-red-500">Poké</strong>Search
          </h2>
          <p className="md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[30vw] text-center text-lg">
            Discover and explore the world of Pokemon. Search through hundreds
            of Pokemon, learn about their types, stats, and abilities.
          </p>
        </div>

        <div className="flex items-center gap-2 border border-slate-300 shadow bg-slate-50 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-300 transition duration-150">
          <Image
            className="pointer-events-none"
            src="/icons/search.svg"
            alt="Search Icon"
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="Search Pokémon by name or type..."
            className="w-88 focus:outline-0"
          />
        </div>
      </div>

      <main className="container mx-auto py-10 px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <Content initialData={initialPokemons} />
      </main>
    </>
  );
}
