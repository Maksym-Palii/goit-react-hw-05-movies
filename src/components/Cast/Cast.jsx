import fetchCast from 'api/apiCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'components/Cast/Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const selectCast = async () => {
      try {
        const response = await fetchCast(movieId);

        const data = await response.cast.map(el => ({
          character: el.character,
          name: el.name,
          photo: `https://image.tmdb.org/t/p/w200${el.profile_path}`,
          id: el.id,
        }));
        // console.log(data);
        setCast(data);
      } catch (error) {
        setError(error.mesage);
      }
    };
    selectCast();
  }, [movieId]);

  return (
    <div className={css.container}>
      {error && <h1>{error}</h1>}
      <ul className={css.list}>
        {cast.map(el => (
          <li className={css.listItem} key={el.id}>
            <img className={css.img} src={el.photo} alt={el.name} />
            <h4 className={css.title}>{el.name}</h4>
            <p className={css.text}>Character: {el.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
