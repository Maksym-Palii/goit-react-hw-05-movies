import fetchDetailsMovi from 'api/apiDetails';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from 'pages/MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';

  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const selectMovie = async () => {
      try {
        const response = await fetchDetailsMovi(movieId);
        const data = await {
          foto: `https://image.tmdb.org/t/p/w300${response.poster_path}`,
          title: response.title,
          overview: response.overview,
          genres: response.genres,
          score: Math.round(response.vote_average * 10),
          date: new Date(response.release_date).getFullYear(),
        };

        setMovie(data);
      } catch (error) {
        setError(error.mesage);
      }
    };

    selectMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref.current} className={css.linkBack}>
        Go back
      </Link>
      {error && <h1>{error}</h1>}
      <div className={css.container}>
        <img src={movie.foto} alt={movie.title} />
        <div className={css.description}>
          <h1 className={css.title}>
            {movie.title} ({movie.date})
          </h1>
          <p className={css.text}>User Score: {movie.score}%</p>
          <h2 className={css.title}>Overview</h2>
          <p className={css.text}>{movie.overview}</p>
          <h2 className={css.title}>Genres</h2>
          <ul>
            {movie.genres?.map(el => (
              <li className={css.list} key={el.id}>
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className={css.informationTitle}>Additional information</h3>
      <ul className={css.informationList}>
        <li className={css.informationListItem}>
          <Link to="cast"> Cast</Link>
        </li>
        <li>
          <Link className={css.informationListItem} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
