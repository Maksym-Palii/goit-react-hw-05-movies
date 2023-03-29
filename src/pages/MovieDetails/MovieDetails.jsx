import fetchDetailsMovi from 'api/apiDetails';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import css from 'pages/MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const selectMovie = async () => {
      const response = await fetchDetailsMovi(movieId);
      const data = await {
        foto: `https://image.tmdb.org/t/p/w300${response.poster_path}`,
        title: response.title,
        overview: response.overview,
        genres: response.genres,
        score: response.vote_average * 10,
        date: new Date(response.release_date).getFullYear(),
      };
      console.log(response);

      setMovie(data);
    };

    selectMovie();
  }, [movieId]);

  return (
    <>
      <Link>Go back</Link>
      <div className={css.container}>
        <img src={movie.foto} alt={movie.title} />
        <div className={css.description}>
          <h1>
            {movie.title} ({movie.date})
          </h1>
          <p>User Score: {movie.score}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres?.map(el => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;
