// src/app/HomePage.js
import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.scss";
import MovieList from "../../pages/movies/page";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const omdbApiKey = "206ba2ba";
      const omdbUrl = "http://www.omdbapi.com/?s=king&apikey=" + omdbApiKey;

      try {
        const response = await fetch(omdbUrl);
        const data = await response.json();

        if (data.Response === "True") {
          console.log(data);
          const moviesData = data.Search.map((movieData) => ({
            id: movieData.imdbID,
            title: movieData.Title,
            poster: movieData.Poster,
            releaseDate: movieData.Year,
          }));

          setMovies(moviesData);
          document.title = "Miniflix";
        } else {
          console.error("Error fetching movies:", data.Error);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.homePage}>
      <h1>Miniflix</h1>
        <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
