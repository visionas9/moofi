"use client";
import { useContext } from "react";
import { FilmContext } from "../lib/FilmContext";
import Link from "next/link";
import Image from "next/image";

export const RenderFilms = () => {
  const { films } = useContext(FilmContext)!;

  const renderFilms = films.map((film) => (
    <div key={film.imdbId} className="flex">
      {film.poster && (
        <Image
          src={film.poster}
          width={150}
          height={200}
          className="rounded-md"
          alt={`${film.title} poster`}
        />
      )}
      <div className="flex flex-col items-center justify-center">
        <h1>{film.title}</h1>
        <p>{film.year}</p>
        <p>{film.actors}</p>
        <p>
          <Link href={film.imdbUrl} className="text-accent">
            Click here
          </Link>{" "}
          to go imdb website
        </p>
      </div>
    </div>
  ));

  return <div>{renderFilms}</div>;
};
