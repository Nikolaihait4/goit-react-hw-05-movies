import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import Notiflix from 'notiflix';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movies-api';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovieDetails = async movieId => {
      try {
        setIsLoading(true);

        const fetchedMovieDetails = await getMovieDetails(movieId, signal);
        setMovie(fetchedMovieDetails);
        Notiflix.Notify.success('Movie ist load....enjoy))');
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails(movieId);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error &&
        Notiflix.Notify.failure(
          'Oops, something went wrong...Try again later!'
        )}

      <div className={css.goBack}>
        <Link to={backLinkRef.current}>Go back</Link>
      </div>

      {movie && (
        <>
          <MovieCard movie={movie} />

          <div className={css.moveiDetailsCont}>
            <h3 className={css.moveiDetailsTitle}>Additional Information</h3>
            <ul className={css.moveiDetailsItem}>
              <li className={css.moveiDetailsList}>
                <Link to="cast">Cast</Link>
              </li>
              <li className={css.moveiDetailsList}>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}
