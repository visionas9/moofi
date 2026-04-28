// page.tsx
"use client";
import { RenderFilms } from "./components/renderFilms";
import SearchBar from "./components/searchBar";
import { useContext } from "react";
import { FilmContext } from "./lib/FilmContext";

export default function Home() {
  const { films, error } = useContext(FilmContext)!;

  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <SearchBar />
      </div>
      <div className="px-5 pb-12 flex flex-col items-center">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {!error && <RenderFilms films={films} />}
      </div>
    </main>
  );
}
