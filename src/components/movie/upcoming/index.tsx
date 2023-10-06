/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieType } from "../../../type/movie";

const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=9be7c49ccd2ba8dafff8d89134ad7992&language=en-US&page=1`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const UpcommingMovie: React.FC = () => {
  const [upcoming, setUpcoming] = useState<
    Omit<MovieType, "vote_count">[] | undefined
  >(undefined);
  const getUpcoming = async () => {
    const response = await fetch(UPCOMING_URL);
    const data = await response.json();
    setUpcoming(data.results);
  };

  useEffect(() => {
    getUpcoming();
  }, []);

  return (
    <section className="text-gray-600 body-font pt-14 ">
      <h1 className="text-3xl font-bold text-center uppercase">
        Upcoming Movie
      </h1>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {upcoming ? (
            upcoming.map((movie) => (
              <div
                className="lg:w-1/4 md:w-1/2 p-4 w-full items-stretch"
                key={movie.id}
              >
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-full">
                  <Link to={`/upcoming/${movie.id}`}>
                    <img
                      className="rounded-t-lg"
                      src={
                        movie.backdrop_path
                          ? `${IMAGE_URL}${movie.backdrop_path}`
                          : "https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="p-5">
                    <Link to={`/upcoming/${movie.id}`}>
                      <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
                        {movie.title.length > 20
                          ? `${movie.title.substring(0, 20)}...`
                          : movie.title}
                      </h5>
                    </Link>
                    <p className="mb-3 text-sm text-gray-800">
                      {movie.overview.length > 100
                        ? `${movie.overview.substring(0, 100)}...`
                        : movie.overview}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div> Loading .... </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcommingMovie;
