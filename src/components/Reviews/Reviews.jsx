import fetchReviews from 'api/apiReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'components/Reviews/Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const selectReviews = async () => {
      try {
        const response = await fetchReviews(movieId);

        const data = await response.results.map(el => ({
          author: el.author,
          content: el.content,
          id: el.id,
        }));

        setReviews(data);
      } catch (error) {
        setError(error.mesage);
      }
    };
    selectReviews();
  }, [movieId]);

  return (
    <div className={css.container}>
      {error && <h1>{error}</h1>}
      {reviews.length === 0 && <p> We don`t have reviews for this movie</p>}
      <ul className={css.list}>
        {reviews.map(el => (
          <li className={css.listItem} key={el.id}>
            <h4 className={css.title}>Author: {el.author}</h4>
            <p className={css.text}>{el.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
