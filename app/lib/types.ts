// interfaces goes here
export interface Film {
  title: string;
  year: number;
  imdbId: string;
  actors: string;
  poster?: string;
  imdbUrl: string;
}

export interface FilmContextType {
  films: Film[];
  searchFilms: (query: string) => Promise<void>;
  watchlist: Film[];
  toggleWatchlist: (film: Film) => void;
}

export interface FilmDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  BoxOffice: string;
  Response: string;
}
