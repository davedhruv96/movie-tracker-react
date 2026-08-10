import React from "react";
import Header from "./components/Header";
import MovieSlider from "./components/MovieSlider";
import MovieItems from "./components/MovieItems";
import Trailers from "./components/Trailers";
import Footer from "./components/Footer";
import Latestnew from "./components/Latestnew";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import MovieSingle from "./components/MovieSingle";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movie-details" element={<MovieSingle />} />
            <Route path="movie-grid" element={<MovieGrid />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
