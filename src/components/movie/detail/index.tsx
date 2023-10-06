/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieType } from "../../../type/movie";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const DetailMovie: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType | undefined>(undefined);

  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9be7c49ccd2ba8dafff8d89134ad7992&language=en-US`,
    );
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className="text-gray-600 body-font pt-14 overflow-hidden">
      <h1 className="text-3xl font-bold text-center  uppercase">
        Detail Movie
      </h1>
      <div className="container px-5 py-8 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="Movie Poster"
            className="lg:w-1/2 w-full lg:h-3/4 h-64 object-cover object-center rounded"
            src={
              movie?.poster_path
                ? `${IMAGE_URL}${movie.poster_path}`
                : "https://via.placeholder.com/500x750"
            }
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {movie?.title || "Loading..."}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {/* Your rating icons */}
                <span className="text-gray-600 ml-3">{movie?.vote_count}</span>
              </span>
            </div>
            <p className="leading-relaxed">{movie?.overview || "Loading..."}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMovie;
