import { convertDate } from 'components/help/convertDate';
import { Link, useLocation } from 'react-router-dom';
import placeholder from '../../img/image.webp';
import css from './MoviesSearch.module.css';

function MovieSearch({ movies, path = '' }) {
  const location = useLocation();
  return (
    <div className={css.movieSearchCont}>
      <ul className={css.movieSearchList}>
        {movies.map(({ id, title, poster_path, release_date }) => {
          const movieTitle =
            title.length < 45 ? title : `${title.slice(0, 45)}...`;
          const formattedDate = convertDate(release_date);
          return (
            <li key={id} className={css.movieSearchList}>
              <Link
                className={css.movieSearchLink}
                to={`${path}${id}`}
                state={{ from: location }}
              >
                <div className={css.movieSearchImgCont}>
                  <img
                    className={css.movieSearchImg}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                        : `${placeholder}`
                    }
                    alt={title}
                  />
                </div>
                <div className={css.movieSearchInfoCont}>
                  <h2 className={css.movieSearchTitle}>{movieTitle}</h2>
                  <p className={css.movieSearchDate}>
                    {release_date && formattedDate}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieSearch;
