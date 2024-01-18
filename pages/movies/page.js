import MovieThumbnail from "../../src/app/components/MovieThumbnail/MovieThumbnail";
import styles from "./page.module.scss";
const MovieList = ({movies}) => {
  return (
    <div>
      <h1>Movie List</h1>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li key={movie.id}>
              <MovieThumbnail movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;