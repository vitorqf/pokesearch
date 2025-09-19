interface Props {
  label: string;
}

export const Type = ({ label }: Props) => {
  const colorMapper: Record<string, string> = {
    normal: "bg-gray-400 text-white",
    fire: "bg-orange-500 text-white",
    water: "bg-blue-500 text-white",
    grass: "bg-green-500 text-white",
    electric: "bg-yellow-400 text-gray-800",
    ice: "bg-cyan-300 text-gray-800",
    fighting: "bg-red-700 text-white",
    poison: "bg-purple-600 text-white",
    ground: "bg-amber-600 text-white",
    flying: "bg-sky-400 text-white",
    psychic: "bg-pink-500 text-white",
    bug: "bg-lime-500 text-white",
    rock: "bg-stone-500 text-white",
    ghost: "bg-indigo-600 text-white",
    dragon: "bg-indigo-800 text-white",
    dark: "bg-gray-800 text-white",
    steel: "bg-slate-400 text-gray-800",
    fairy: "bg-rose-300 text-gray-800",
  };

  return (
    <span
      className={`px-4 py-1.5 text-lg font-semibold capitalize rounded-lg shadow-sm ${colorMapper[label] || "bg-gray-200 text-gray-800"}`}
    >
      {label}
    </span>
  );
};
