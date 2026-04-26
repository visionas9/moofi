import { Header } from "./components/header";
import { RenderFilms } from "./components/renderFilms";
import SearchBar from "./components/searchBar";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center py-12 px-5 bg-bg">
        <Header />
        <SearchBar />
      </div>
      <RenderFilms />
    </main>
  );
}
