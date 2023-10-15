import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import placeholder from '../../img/image.webp';
import css from './MovieList.module.css';

function MovieList({ movies, path = '' }) {
  const location = useLocation();
  return (
    <ul className={css.movieContainer}>
      {movies.map(({ id, title, poster_path }) => {
        const poaterPath = poster_path
          ? `https://image.tmdb.org/t/p/w300/${poster_path}`
          : `${placeholder}`;

        const movieTitle =
          title.length < 50 ? title : `${title.slice(0, 50)}...`;
        return (
          <li className={css.movieItem} key={id}>
            <Link
              className={css.movieLink}
              to={`${path}${id}`}
              state={{ from: location }}
            >
              <div className={css.movieImgContainer}>
                <img className={css.movieImg} src={poaterPath} alt={title} />
              </div>
              <div className={css.movieTitleContainer}>
                <p className={css.movieTitle}>{movieTitle}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieList;
