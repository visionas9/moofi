import { Film, FilmDetails } from "../types";

// Single call, returns list of films when search (one call, many films).
// OMDb's own search: the free third-party search API used before went down.
export const fetchListofFilms = async (query: string): Promise<Film[]> => {
  const res = await fetch(
    `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`,
  );
  if (!res.ok) throw new Error("API failed");

  const data = await res.json();

  // OMDb answers 200 with Response "False" when nothing matches.
  if (data.Response === "False" || !data.Search?.length) {
    throw new Error("No results found. Try something else.");
  }

  return data.Search.map(
    (film: OmdbSearchResult): Film => ({
      title: film.Title,
      year: film.Year,
      imdbId: film.imdbID,
      // "N/A" when there is no poster, so the card falls back to a placeholder.
      poster: film.Poster !== "N/A" ? film.Poster : undefined,
      imdbUrl: `https://www.imdb.com/title/${film.imdbID}/`,
    }),
  );
};

interface OmdbSearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

// film details page data fetch
export const fetchFilmDetails = async (
  imdbId: string,
): Promise<FilmDetails> => {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${imdbId}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`,
  );
  if (!res.ok) throw new Error("API failed");

  const data = await res.json();
  if (data.Response === "False") throw new Error(data.Error);

  return data;
};
