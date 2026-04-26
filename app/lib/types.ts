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
}
