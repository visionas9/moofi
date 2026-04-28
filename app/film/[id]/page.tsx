// only gives the id to context by id={id}, server-side component, params is already exist without import
"use client";
import { use } from "react";
import { useState, useEffect } from "react";
import { fetchFilmDetails } from "@/app/lib/services/imbdService";
import Link from "next/link";
import type { FilmDetails } from "@/app/lib/types";

export default function FilmDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [details, setDetails] = useState<FilmDetails | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;
    const getDetails = async () => {
      try {
        const filmDetails = await fetchFilmDetails(id);
        setDetails(filmDetails);
      } catch (err) {
        setError("Failed to load film details.");
      }
    };
    getDetails();
  }, [id]);

  if (error) {
    return <p className="text-red-500 text-center mt-12">{error}</p>;
  }

  if (!details)
    return <p className="text-muted text-center mt-12">Loading...</p>;

  return (
    <main className="min-h-screen bg-bg px-5 py-12">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {/* Top section */}
        <Link
          href="/"
          className="text-accent hover:text-accent-hover text-sm w-fit"
        >
          ← Go back
        </Link>
        <div className="flex flex-row gap-6 items-start">
          <img
            src={details.Poster}
            alt={details.Title}
            className="rounded-xl w-[150px] shrink-0"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-text text-2xl font-bold leading-tight">
              {details.Title}
            </h1>
            <p className="text-muted text-sm">
              {details.Year} · {details.Runtime} · {details.Rated}
            </p>
            <p className="text-muted text-sm">{details.Genre}</p>
            <p className="text-muted text-sm">{details.Director}</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-accent font-bold text-lg">
                {details.imdbRating}
              </span>
              <span className="text-muted text-sm">
                / 10 · {details.imdbVotes} votes
              </span>
            </div>
          </div>
        </div>

        {/* Plot */}
        <div className="bg-surface border border-border rounded-xl p-4">
          <h2 className="text-text font-semibold mb-2">Plot</h2>
          <p className="text-muted text-sm leading-relaxed">{details.Plot}</p>
        </div>

        {/* Details */}
        <div className="bg-surface border border-border rounded-xl p-4 flex flex-col gap-2">
          <h2 className="text-text font-semibold mb-1">Details</h2>
          <p className="text-sm">
            <span className="text-muted">Actors: </span>
            <span className="text-text">{details.Actors}</span>
          </p>
          <p className="text-sm">
            <span className="text-muted">Writer: </span>
            <span className="text-text">{details.Writer}</span>
          </p>
          <p className="text-sm">
            <span className="text-muted">Country: </span>
            <span className="text-text">{details.Country}</span>
          </p>
          <p className="text-sm">
            <span className="text-muted">Language: </span>
            <span className="text-text">{details.Language}</span>
          </p>
          <p className="text-sm">
            <span className="text-muted">Box Office: </span>
            <span className="text-text">{details.BoxOffice}</span>
          </p>
          <p className="text-sm">
            <span className="text-muted">Awards: </span>
            <span className="text-text">{details.Awards}</span>
          </p>
        </div>

        {/* IMDb link */}
        <a
          href={`https://www.imdb.com/title/${details.imdbID}`}
          target="_blank"
          className="text-accent hover:text-accent-hover text-sm w-fit"
        >
          View on IMDb →
        </a>
      </div>
    </main>
  );
}
