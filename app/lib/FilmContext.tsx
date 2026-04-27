"use client";
import React, { useState, createContext } from "react";
import type { Film } from "./types";
import { fetchListofFilms } from "./services/imbdService";
import type { FilmContextType } from "./types";

const FilmContext = createContext<FilmContextType | null>(null);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [films, setFilms] = useState<Film[]>([]);
  const [watchlist, setWatchlist] = useState<Film[]>([]);

  const toggleWatchlist = (film: Film) => {
    setWatchlist((prev) =>
      prev.some((f) => f.imdbId === film.imdbId)
        ? prev.filter((f) => f.imdbId !== film.imdbId)
        : [...prev, film],
    );
  };

  const searchFilms = async (query: string) => {
    const films = await fetchListofFilms(query);
    setFilms(films);
  };

  return (
    <FilmContext.Provider
      value={{ films, searchFilms, watchlist, toggleWatchlist }}
    >
      {children}
    </FilmContext.Provider>
  );
};

export { FilmContext };
