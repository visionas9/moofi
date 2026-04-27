"use client";
import { useContext } from "react";
import { FilmContext } from "../lib/FilmContext";
import { RenderFilms } from "../components/renderFilms";

export default function renderWatchlist() {
  const { watchlist } = useContext(FilmContext)!;

  if (watchlist.length === 0)
    return (
      <p className="text-muted text-sm mt-4 text-center">
        Your watchlist is empty. Start saving films!
      </p>
    );

  return <RenderFilms films={watchlist} />;
}
