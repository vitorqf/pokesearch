"use client";

import { useState } from "react";

interface Props {
  src: string;
  fallback: string;
  alt: string;
}

export const MainImage = ({ src, fallback, alt }: Props) => {
  const [imageSrc, setImageSrc] = useState(
    src ?? fallback ?? "https://placehold.co/300x300/f87171/ffffff?text=?",
  );
  return (
    <div className="group flex flex-col bg-slate-200 items-center justify-center w-full flex-2 h-full rounded-lg">
      <img
        width={300}
        height={300}
        className="group-hover:scale-125 transition duration-150"
        src={imageSrc}
        onError={() => setImageSrc(fallback)}
        alt={alt}
      />
    </div>
  );
};
