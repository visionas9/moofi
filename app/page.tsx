// page.tsx
"use client";
import { Header } from "./components/header";
import { RenderFilms } from "./components/renderFilms";
import SearchBar from "./components/searchBar";
import { useContext } from "react";
import { FilmContext } from "./lib/FilmContext";

export default function Home() {
  const { films, watchlist } = useContext(FilmContext)!;

  return (
    <main className="min-h-screen bg-bg">
      <div className="flex flex-col items-center justify-center py-12 px-5">
        <Header />
        <SearchBar />
      </div>
      <div className="px-5 pb-12 flex flex-col items-center">
        <RenderFilms films={films} />
        <RenderFilms films={watchlist} />
      </div>
    </main>
  );
}
