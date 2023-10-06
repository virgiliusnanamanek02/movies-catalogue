import React from "react";
import { Link } from "react-router-dom";
import { MovieType } from "../../type/movie";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
type ExcludedKeys = "poster_path" | "vote_count";

const DisplaySearchResult: React.FC<Omit<MovieType, ExcludedKeys>> = ({
  id,
  title,
  overview,
  backdrop_path,
}) => {
  // Periksa apakah backdrop_path ada atau tidak
  const shouldRender = backdrop_path !== null && backdrop_path !== undefined;

  // Hanya merender komponen jika shouldRender adalah true
  return shouldRender ? (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-stretch" key={id}>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-full">
        <Link to={`/now-playing/${id}`}>
          <img
            className="object-cover object-center rounded-t-lg h-48 w-full"
            src={backdrop_path && `${IMAGE_URL}${backdrop_path}`}
            alt=""
          />
        </Link>
        <div className="p-5">
          <Link to={`/now-playing/${id}`}>
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
              {title}
            </h5>
          </Link>
          <p className="mb-3 text-sm text-gray-800">
            {overview.length > 100
              ? `${overview.substring(0, 100)}...`
              : overview}
          </p>
        </div>
      </div>
    </div>
  ) : null; // Jika shouldRender adalah false, kembalikan null
};


export default DisplaySearchResult;
