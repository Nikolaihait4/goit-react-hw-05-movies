import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movies-api';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);

        const fetchedMovies = await getTrendingMovies(signal);

        setTrendingMovies(fetchedMovies);
        Notiflix.Notify.success('Movie ist load....enjoy))');
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className={css.homeSection}>
      {<h1 className={css.homeTitle}>Trending today</h1>}
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong...Try again later!</p>}
      {trendingMovies.length > 0 && (
        <MovieList movies={trendingMovies} path="movies/" />
      )}
    </div>
  );
};

export default Home;
