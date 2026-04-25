// components reads the data from context, whatever id context brings.
"use client";
import { useState } from "react";
import { Film } from "../lib/types";
import { fetchListofFilms } from "../lib/services/imbdService";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [film, setFilm] = useState<Film[]>([]);

  const handleSearch = async () => {
    const results = await fetchListofFilms(query);
    setFilm(results);
  };

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {film.map((film) => (
        <div key={film.imdbId}>{film.title}</div>
      ))}
    </div>
  );
}
