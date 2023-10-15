import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movies-api';
import ReviewsList from './ReviewsList';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovieReviews = async movieId => {
      try {
        setIsLoading(true);

        const fetchedReviews = await getMovieReviews(movieId, signal);
        setReviews(fetchedReviews);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews(movieId);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>No result find</p>}
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>No reviews yet...</p>
      )}
    </>
  );
}
