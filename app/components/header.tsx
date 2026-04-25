import SearchBar from "./searchBar";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-5 bg-bg">
      <h1 className="text-4xl text-text mb-1">Moofi</h1>
      <p className="text-sm text-muted">
        Search and save any movie you'd like! And find it later easily.
      </p>
      <SearchBar />
    </div>
  );
};
