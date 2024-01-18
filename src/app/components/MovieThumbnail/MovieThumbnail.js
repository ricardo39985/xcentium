import Link from 'next/link';
import Image from 'next/image';
import styles from './MovieThumbnail.module.scss';

const MovieThumbnail = ({ movie }) => {
  return (
    <Link href={`/movies/details/${movie.id}`} className={styles.link}>
      <div className={styles['card-container']}>
        <Image
          className={styles.image}
          src={movie.poster}
          alt={`${movie.title} Poster`}
          width={300}
          height={450}
        />
        <div className={styles['text-block']}>
          <h2>{movie.title}</h2>
          <p></p>
        </div>
      </div>
    </Link>
  );
};

export default MovieThumbnail;
