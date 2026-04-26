// components reads the data from context, whatever id context brings.
"use client";
import { useContext, useState } from "react";
import { FilmContext } from "../lib/FilmContext";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const { films, searchFilms } = useContext(FilmContext)!;
  console.log(films);

  return (
    <div>
      <input
        className="bg-white text-bg mt-3 p-1 rounded-xl w-[300px]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-accent text-bg p-1 ml-1 rounded-xl hover:bg-accent-hover cursor-pointer"
        onClick={() => searchFilms(query)}
      >
        Search
      </button>
      {films.map((film) => (
        <div key={film.imdbId}>{film.title}</div>
      ))}
    </div>
  );
}
