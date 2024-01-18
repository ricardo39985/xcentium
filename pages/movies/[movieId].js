import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
const MovieDetails = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const [movie, setMovie] = useState({});
  const [movieFound, setMovieFound] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const omdbApiKey = "206ba2ba";
      const omdbUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=${omdbApiKey}`;

      try {
        const response = await fetch(omdbUrl);
        const movieData = await response.json();
        console.log(movieData);

        setMovieFound(movieData.Response === "True");

        if (movieData.Response === "True") {
          const newMovie = {
            id: movieData.imdbID,
            title: movieData.Title,
            poster: movieData.Poster,
            description: movieData.Plot,
            releaseDate: movieData.Year,
            poster: movieData.Poster,
            rating: movieData.imdbRating,
            votes: `${parseInt(movieData.imdbVotes)}K`,
          };

          setMovie(newMovie);
          document.title = `${newMovie.title} - Miniflix`;
        } else {
          console.error("Error fetching movie:", movieData.Error);
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    // Fetch movies when the component mounts or when the movieId changes
    if (movieId) {
      fetchMovies();
    }
  }, [movieId]);

  return movieFound ? (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          className={styles.card__image}
          src={movie.poster}
          alt={`Poster for ${movie.title}`}
          width={400}
          height={400}
        />
        <div className={styles[`card__content`]}>
          <h1 className={styles['card__title']}> {movie.title}</h1>
          <p className={styles.card__description}>
            Release Date: {movie.releaseDate}
          </p>
          <p className={styles.card__description}>⭐ {movie.rating} / 10 <br/> <small>{movie.votes}</small></p>
          <p className={styles.card__description}></p>
          <p className={styles.card__description}>{movie.description}</p>
          <ul className={styles.button_container}>

          <li>
            <Link href={'/'} className={styles.card__button}>Back</Link>
          </li>
          <li>
            <Link target="_blank" href={`https://www.imdb.com/title/${movie.id}/`} className={styles.card__button}>More</Link>
          </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div>Movie not found</div>
  );
};

export default MovieDetails;
