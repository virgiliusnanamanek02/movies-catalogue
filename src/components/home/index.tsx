import React, { useState, useEffect } from "react";
import { MovieType } from "../../type/movie";
import DisplaySearchResult from "../display-result";

type ExcludedKeys = "poster_path" | "vote_count";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState<
    Omit<MovieType, ExcludedKeys>[]
  >([]);

  const handleSearch = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9be7c49ccd2ba8dafff8d89134ad7992&language=en-US&query=${search}&page=1&include_adult=false`,
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data.results);
      });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    const data = sessionStorage.getItem("searchResult");

    if (data) {
      setSearchResult(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("searchResult", JSON.stringify(searchResult));
  }, [searchResult]);

  return (
    <>
      <section className="text-gray-600 body-font h-96 w-full bg-gradient-to-tr from-blue-700 to-purple-500 relative">
        <img
          src="https://i.ibb.co/Qm0gh0X/herobg.jpg"
          alt="hero"
          className="object-cover object-center w-full h-full absolute mix-blend-overlay"
        />
        <div className="container mx-auto px-5 py-20">
          <div className="w-full md:w-2/3 mb-16">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white uppercase">
              Selamat Datang di Galenka Cinema
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Jutaan film, acara TV, dan orang-orang untuk dijelajahi. Jelajahi
              sekarang.
            </p>
          </div>
          <form onSubmit={handleSearch}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukan kata kunci"
                required
                autoComplete="off"
                onChange={onInputChange}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </section>
      <section className="container px-5 py-24 mx-auto">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-5">
          Hasil Pencarian
        </h2>

        <div className="flex flex-wrap -m-4">
          {searchResult.length > 0
            ? searchResult.map((movie) => (
                <DisplaySearchResult
                  key={movie.id}
                  id={movie.id}
                  backdrop_path={movie.backdrop_path}
                  title={movie.title}
                  overview={movie.overview}
                />
              ))
            : searchResult.map((movie) => (
                <DisplaySearchResult
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  backdrop_path={movie.backdrop_path}
                  overview={movie.overview}
                />
              ))}
        </div>
      </section>
    </>
  );
};

export default Home;
