import css from 'components/NotFound/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.notFound}>
      <p>
        Sorry, there was a mistake. Please try again later, or check the request
        URL
      </p>
    </div>
  );
};
export default NotFound;
