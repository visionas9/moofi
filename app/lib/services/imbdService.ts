import { Film, FilmDetails } from "../types";

// Single call, returns list of films when search (one call, many films)
export const fetchListofFilms = async (query: string): Promise<Film[]> => {
  const res = await fetch(
    `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(query)}`,
  );
  if (!res.ok) throw new Error("API failed");

  const data = await res.json();

  if (!data.description || data.description.length === 0) {
    throw new Error("No results found. Try something else.");
  }

  return data.description.map(
    (film: any): Film => ({
      title: film["#TITLE"],
      year: film["#YEAR"],
      imdbId: film["#IMDB_ID"],
      actors: film["#ACTORS"],
      poster: film["#IMG_POSTER"],
      imdbUrl: film["#IMDB_URL"],
    }),
  );
};

// film details page data fetch
export const fetchFilmDetails = async (
  imdbId: string,
): Promise<FilmDetails> => {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${imdbId}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`,
  );

  const data = await res.json();
  if (data.Response === "False") throw new Error(data.Error);

  return data;
};
