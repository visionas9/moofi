// renderFilms.tsx
"use client";
import type { Film } from "../lib/types";
import Link from "next/link";
import { useContext } from "react";
import { FilmContext } from "../lib/FilmContext";
import { useRouter } from "next/navigation";

export const RenderFilms = ({ films }: { films: Film[] }) => {
  const { toggleWatchlist, watchlist } = useContext(FilmContext)!;

  const router = useRouter();

  if (films.length === 0)
    return (
      <p className="text-muted text-sm mt-4">
        Search a movie to see the results.
      </p>
    );

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      {films.map((film) => (
        <div
          onClick={() => router.push(`/film/${film.imdbId}`)}
          key={film.imdbId}
          className="flex flex-row items-start gap-4 bg-surface hover:bg-surface-hover border border-border rounded-xl p-4 transition-colors cursor-pointer"
        >
          <div className="shrink-0">
            <img
              src={film.poster || "https://placehold.co/100x150"}
              width={100}
              className="rounded-md object-cover"
              alt={`${film.title} poster`}
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/100x150";
              }}
            />
          </div>
          <div className="flex flex-col gap-1 w-[70%]">
            <h2 className="text-text font-semibold text-lg leading-tight">
              {film.title}
            </h2>
            <p className="text-muted text-sm">{film.year}</p>
            <p className="text-muted text-sm line-clamp-2">{film.actors}</p>
            <Link
              href={`/film/${film.imdbId}`}
              className="text-accent hover:text-accent-hover text-sm mt-1 w-fit"
            >
              See details →
            </Link>
          </div>
          <div className="m-auto ">
            <svg
              onClick={(e) => {
                e.stopPropagation();
                toggleWatchlist(film);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill={
                watchlist.some((f) => f.imdbId == film.imdbId)
                  ? "white"
                  : "none"
              }
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer transition-all duration-200"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};
