"use client";
import React, { useState, createContext, useEffect } from "react";
import type { Film } from "./types";
import { fetchListofFilms } from "./services/imdbService";
import type { FilmContextType } from "./types";

const FilmContext = createContext<FilmContextType | null>(null);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [films, setFilms] = useState<Film[]>([]);
  const [watchlist, setWatchlist] = useState<Film[]>([]);
  const [error, setError] = useState<string>("");

  const toggleWatchlist = (film: Film) => {
    setWatchlist((prev) =>
      prev.some((f) => f.imdbId === film.imdbId)
        ? prev.filter((f) => f.imdbId !== film.imdbId)
        : [...prev, film],
    );
  };

  const searchFilms = async (query: string) => {
    try {
      const films = await fetchListofFilms(query);
      setFilms(films);
      setError("");
    } catch (err) {
      setError("No results found. Try something else.");
      setFilms([]);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("watchlist");
    if (stored) setWatchlist(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <FilmContext.Provider
      value={{
        films,
        searchFilms,
        watchlist,
        toggleWatchlist,
        error,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};

export { FilmContext };
