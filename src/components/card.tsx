import Link from "next/link";

interface Props {
  id: string;
  name: string;
  image: string;
  redirectTo: number;
}

export const Card = ({ id, name, image, redirectTo }: Props) => {
  return (
    <Link
      href={`/pokemon/${redirectTo}`}
      className="w-full flex flex-col justify-between rounded-lg group hover:ring-2 hover:ring-blue-300 h-64 border border-slate-200 overflow-hidden"
    >
      <div className="items-center justify-center flex w-full h-full bg-slate-200">
        <img
          width={120}
          height={120}
          src={image}
          alt={name}
          className="group-hover:scale-120 transition duration-150"
        />
      </div>
      <div className="p-3">
        <h2 className="text-slate-400">#{id}</h2>
        <p className="capitalize font-semibold">{name}</p>
      </div>
    </Link>
  );
};
