/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-cente">
          Movie
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            "w-full md:block md:w-auto" + (navbarOpen ? " block" : " hidden")
          }
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-800 rounded-lg hover:bg-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-800 rounded-lg hover:bg-gray-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/now-playing"
                className="block px-4 py-2 text-gray-800 rounded-lg hover:bg-gray-100"
              >
                Now Playing
              </Link>
            </li>

            <li>
              <Link
                to="/upcoming"
                className="block px-4 py-2 text-gray-800 rounded-lg hover:bg-gray-100"
              >
                Upcoming
              </Link>
            </li>
            <li>
              <button
                onClick={onSignOut}
                className="block px-4 py-2 text-gray-800 rounded-lg hover:bg-gray-100"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
