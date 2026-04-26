"use client";
import { useContext, useState } from "react";
import { FilmContext } from "../lib/FilmContext";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { searchFilms } = useContext(FilmContext)!;

  return (
    <div className="flex items-center gap-2 w-full max-w-md">
      <input
        className="flex-1 bg-surface border border-border text-text placeholder:text-muted px-4 py-2 rounded-xl focus:outline-none focus:border-accent transition-colors"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && searchFilms(query)}
      />
      <button
        className="bg-accent text-bg font-semibold px-4 py-2 rounded-xl hover:bg-accent-hover transition-colors cursor-pointer shrink-0"
        onClick={() => searchFilms(query)}
      >
        Search
      </button>
    </div>
  );
}
