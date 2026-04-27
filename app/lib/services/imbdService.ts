import { Film } from "../types";

// Single call, returns list of films when search (one call, many films)
export const fetchListofFilms = async (query: string): Promise<Film[]> => {
  const res = await fetch(
    `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(query)}`,
  );
  if (!res.ok) throw new Error("API failed");

  const data = await res.json();

  if (!data || data.length === 0) {
    throw new Error("the film is not exist!", data);
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
export const fetchFilmDetails = async (imdbId: string) => {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${imdbId}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`,
  );
  if (!res.ok) throw new Error("Failed to fetch film details");

  const data = await res.json();
  return data;
};
