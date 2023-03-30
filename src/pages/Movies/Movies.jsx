import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import fetchSearchsMovi from 'api/apiSearch';
import { Link } from 'react-router-dom';
import css from 'pages/Movies/Movies.module.css';

const Movies = () => {
  const [sentSearchQuery, setSentSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const hendleFormSubmit = searchQuery => {
    setMovies([]);
    setSentSearchQuery(searchQuery);
    setError(null);
  };

  useEffect(() => {
    const popularMmoviesList = async () => {
      try {
        const response = await fetchSearchsMovi(sentSearchQuery);
        if (response.results.length === 0) {
          alert(`Sorry, no movi for this request ${sentSearchQuery}`);
        }
        const data = await response.results.map(el => ({
          title: el.title,
          id: el.id,
        }));
        setMovies(data);
      } catch (error) {
        setError(error.mesage);
      }
    };

    if (sentSearchQuery) {
      popularMmoviesList();
    }
  }, [sentSearchQuery]);

  return (
    <div className={css.container}>
      <SearchForm submit={hendleFormSubmit} />
      {error && <h1>{error}</h1>}
      <ul>
        {movies.map(el => (
          <li key={el.id} className={css.list}>
            <Link className={css.link} to={`${el.id}`}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
