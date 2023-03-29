import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchTrending from 'api/apiTrending';

const Home = () => {
  const [popularMmovies, setPopularMmovies] = useState([]);

  useEffect(() => {
    const popularMmoviesList = async () => {
      const response = await fetchTrending();
      const data = await response.map(el => ({
        title: el.title,
        id: el.id,
      }));

      setPopularMmovies(data);
    };
    popularMmoviesList();
  }, []);
  console.log(popularMmovies);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {popularMmovies.map(el => (
          <li key={el.id}>
            <Link to={`movies/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
