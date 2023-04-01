import { PropTypes } from 'prop-types';
import { useState } from 'react';
import css from 'components/SearchForm/SearchForm.module.css';

const SearchForm = ({ submit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Enter a query in the search field');
      return;
    }

    submit(searchQuery);
    reset();
  };

  function reset() {
    setSearchQuery('');
  }

  const handleChange = evt => {
    const { value } = evt.target;
    setSearchQuery(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        onChange={handleChange}
        name="searchQuery"
        value={searchQuery}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
