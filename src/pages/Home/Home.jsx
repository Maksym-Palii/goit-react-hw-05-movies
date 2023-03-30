import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchTrending from 'api/apiTrending';
import css from 'pages/Home/Home.module.css';

const Home = () => {
  const [popularMmovies, setPopularMmovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const popularMmoviesList = async () => {
      try {
        const response = await fetchTrending();
        const data = await response.map(el => ({
          title: el.title,
          id: el.id,
        }));

        setPopularMmovies(data);
      } catch (error) {
        setError(error.mesage);
      }
    };

    popularMmoviesList();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      {error && <h1>{error}</h1>}
      <ul>
        {popularMmovies.map(el => (
          <li key={el.id} className={css.list}>
            <Link className={css.link} to={`movies/${el.id}`}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
