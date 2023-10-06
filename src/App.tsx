
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import UpcomingMovie from "./components/movie/upcoming";
import NowPlayingMovie from "./components/movie/now-playing";
import DetailMovie from "./components/movie/detail";

const App: React.FC = () => {
  // Define the type of the token state
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the token from local storage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Parse and set the token
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      // Store the token in local storage
      localStorage.setItem("token", token);
    } else {
      // Remove the token from local storage if it's null
      localStorage.removeItem("token");
    }
  }, [token]);

  if (!token) {
    return (
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <Login setToken={setToken} />
      </div>
    );
  }
  return (
    <div className="font-Rubik">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="now-playing" element={<NowPlayingMovie />} />
        <Route path="now-playing/:id" element={<DetailMovie />} />
        <Route path="upcoming" element={<UpcomingMovie />} />
        <Route path="upcoming/:id" element={<DetailMovie />} />
      </Routes>
    </div>
  );
};

export default App;

