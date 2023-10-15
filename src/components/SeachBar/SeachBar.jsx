import Notiflix from 'notiflix';
import { useState } from 'react';
import css from './SeachBar.module.css';

function Searchbar({ onSubmit, isLoading }) {
  const [query, setQuery] = useState('');

  const handleInput = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notiflix.Notify.failure('Please enter something to search...');
      return;
    }

    onSubmit(query);
    setQuery('');
    Notiflix.Notify.success('Movie ist load....enjoy))');
  };

  return (
    <div className={css.seachCont}>
      <form className={css.seachForm} onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          value={query}
          onChange={handleInput}
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
          className={css.seachInput}
        />
        <button className={css.seachButton} type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
