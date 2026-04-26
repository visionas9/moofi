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

//returns one film with all details(Not needed for now)
/*const fetchFilmDetails = async () => {
  const res = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`);
  const data = await res.json();

  return data;
};*/
