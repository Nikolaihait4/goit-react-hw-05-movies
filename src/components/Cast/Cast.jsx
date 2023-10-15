import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movies-api';
import CastList from './Castlist';
import Loader from 'components/Loader/Loader';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovieCast = async movieId => {
      try {
        setIsLoading(true);

        const fetchedCast = await getMovieCast(movieId, signal);
        setCast(fetchedCast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast(movieId);

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? <CastList cast={cast} /> : <p>No cast added...</p>}

      {isLoading && <Loader />}
      {error && <p>No result find</p>}
    </>
  );
}
