import fetchReviews from 'api/apiReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      {error && <h1>{error}</h1>}
      {reviews.length === 0 && <p> We don`t have reviews for this movie</p>}
      <ul>
        {reviews.map(el => (
          <li key={el.id}>
            <h4>Author: {el.author}</h4>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
