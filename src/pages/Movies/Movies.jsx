import Loader from 'components/Loader/Loader';
import MovieSearch from 'components/MovieSearch/MovieSearch';
import css from './Movies.module.css';

import { ScrollTop } from 'components/ScrollTop/ScrollTop';
import Searchbar from 'components/SeachBar/SeachBar';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/movies-api';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = searchParams.get('query') ?? '';
  const handleLoadMore = () => {
    setPage(p => p + 1);
    scroll.scrollMore(350);
  };

  const onSubmit = query => {
    if (queryParams === query) {
      Notiflix.Notify.failure(`You are already searching - ${query}`);
      return;
    }
    setSearchParams(query ? { query } : {});
    setMovies([]);
    setError(false);
    setPage(1);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovies = async (query, page) => {
      try {
        setIsLoading(true);

        const normalizedQuery = query.toLowerCase().trim();
        const { results: fetchedMovies, total_pages } = await getMovies(
          normalizedQuery,
          signal,
          page
        );

        if (!fetchedMovies.length && normalizedQuery) {
          Notiflix.Notify.failure('No movies found');
          setSearchParams({});
          return;
        }

        setMovies(m => [...m, ...fetchedMovies]);
        setTotalPages(total_pages);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (queryParams) fetchMovies(queryParams, page);

    return () => {
      controller.abort();
    };
  }, [queryParams, setSearchParams, page]);

  return (
    <div>
      <Searchbar
        onSubmit={onSubmit}
        value={queryParams}
        isLoading={isLoading}
      />
      {movies.length > 0 && (
        <div className={css.buttonCont}>
          <MovieSearch movies={movies} />
          {page !== totalPages && (
            <button
              className={css.loadMore}
              type="button"
              onClick={handleLoadMore}
              disabled={isLoading ? true : false}
            >
              Load more
            </button>
          )}
          <ScrollTop />
        </div>
      )}
      {isLoading && <Loader />}
      {error &&
        Notiflix.Notify.failure(
          'Oops, something went wrong...Try again later!'
        )}
    </div>
  );
}
