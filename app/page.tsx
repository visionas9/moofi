// page.tsx
import { Header } from "./components/header";
import { RenderFilms } from "./components/renderFilms";
import SearchBar from "./components/searchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="flex flex-col items-center justify-center py-12 px-5">
        <Header />
        <SearchBar />
      </div>
      <div className="px-5 pb-12 flex flex-col items-center">
        <RenderFilms />
      </div>
    </main>
  );
}
