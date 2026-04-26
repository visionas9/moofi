// renderFilms.tsx
"use client";
import { useContext } from "react";
import { FilmContext } from "../lib/FilmContext";
import Link from "next/link";
import Image from "next/image";

export const RenderFilms = () => {
  const { films } = useContext(FilmContext)!;

  if (films.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      {films.map((film) => (
        <div
          key={film.imdbId}
          className="flex flex-row items-start gap-4 bg-surface hover:bg-surface-hover border border-border rounded-xl p-4 transition-colors cursor-pointer"
        >
          <div className="shrink-0">
            <Image
              src={film.poster || "https://placehold.co/100x150"}
              width={100}
              height={150}
              className="rounded-md object-cover"
              alt={`${film.title} poster`}
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/100x150";
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-text font-semibold text-lg leading-tight">
              {film.title}
            </h2>
            <p className="text-muted text-sm">{film.year}</p>
            <p className="text-muted text-sm line-clamp-2">{film.actors}</p>
            <Link
              href={film.imdbUrl}
              className="text-accent hover:text-accent-hover text-sm mt-1 w-fit"
              target="_blank"
            >
              View on IMDb →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
