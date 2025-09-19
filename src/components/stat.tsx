interface Props {
  label: string;
  value: number;
}

export const Stat = ({ label, value }: Props) => {
  const statNames: Record<string, string> = {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    "special-attack": "Sp. Atk",
    "special-defense": "Sp. Def",
    speed: "Speed",
  };
  const statColor =
    {
      hp: "bg-red-500",
      attack: "bg-orange-500",
      defense: "bg-yellow-500",
      "special-attack": "bg-blue-500",
      "special-defense": "bg-green-500",
      speed: "bg-pink-500",
    }[label] || "bg-gray-400";
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between w-full">
        <p className="font-medium capitalize text-slate-600 w-36">
          {statNames[label] || label}
        </p>
        <p className="font-bold text-slate-800 text-lg">{value}</p>
      </div>
      <div className="relative bg-slate-200 w-full h-3 rounded-full overflow-hidden">
        <div
          className={`absolute left-0 top-0 bottom-0 ${statColor}`}
          style={{ width: `${(value / 255) * 100}%` }}
        />
      </div>
    </div>
  );
};
