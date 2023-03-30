import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="searchQuery"
        value={searchQuery}
        className=""
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
