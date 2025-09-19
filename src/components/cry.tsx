"use client";
import { useRef } from "react";

export const Cry = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.play();
    }
  };

  if (!src) return null;

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      <button
        onClick={handlePlay}
        className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition"
        aria-label={`Play pokemon cry`}
        title="Play pokemon cry"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      </button>
    </>
  );
};
