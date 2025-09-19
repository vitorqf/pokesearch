"use client";

import Link from "next/link";
import { forwardRef, useState } from "react";

interface Props {
  id: string;
  name: string;
  image: string;
  redirectTo: number;
}

export const Card = forwardRef<HTMLAnchorElement, Props>(
  ({ id, name, image, redirectTo }, ref) => {
    const fallback = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    const [src, setSrc] = useState(image ?? fallback);
    return (
      <Link
        ref={ref}
        href={`/pokemon/${redirectTo}`}
        className="w-full flex flex-col justify-between rounded-lg group hover:ring-2 hover:ring-blue-300 h-64 border border-slate-200 overflow-hidden"
      >
        <div className="items-center justify-center flex w-full h-full bg-slate-200">
          <img
            width={120}
            height={120}
            src={src}
            onError={() => setSrc(fallback)}
            alt={name}
            className="group-hover:scale-120 transition duration-150 max-h-[120px] max-w-[120px]"
          />
        </div>
        <div className="p-3">
          <h2 className="text-slate-400">#{id}</h2>
          <p className="capitalize font-semibold">{name}</p>
        </div>
      </Link>
    );
  },
);
