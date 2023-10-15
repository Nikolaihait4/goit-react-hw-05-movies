import { convertDate } from 'components/help/convertDate';
import { convertTime } from 'components/help/convertTime';
import React from 'react';
import placeholder from '../../img/image.webp';
import ScoreBar from 'components/help/scoreBar';
import css from './MovieCard.module.css';

function MovieCard({ movie }) {
  const {
    poster_path,
    backdrop_path,
    title,
    overview,
    genres,
    vote_average,
    release_date,
    runtime = 0,
    tagline,
    homepage,
  } = movie;

  const backdrop = backdrop_path
    ? `linear-gradient(rgba(47,48,58,0.8), rgba(47,48,58,0.8)), url(https://image.tmdb.org/t/p/original/${backdrop_path})`
    : 'linear-gradient(rgba(47,48,58,0.8), rgba(47,48,58,0.8))';

  const genresList =
    genres.length > 0
      ? genres.map(genre => genre.name).join(', ')
      : 'No genres provided';

  const formattedYear = release_date ? `(${release_date.split('-')[0]})` : '';
  const formattedDate = convertDate(release_date);

  const movieOverview = overview ? overview : 'No overviews yet...';
  const filmDuration = convertTime(runtime);
  const score = vote_average ? Math.round((vote_average / 10) * 100) : 0;
  return (
    <div
      className={css.movieContainer}
      style={{
        backgroundImage: backdrop,
        backgroundSize: 'cover',
      }}
    >
      <div className={css.movieContainer2}>
        <div className={css.imgContainer}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : `${placeholder}`
            }
            alt={title}
            width="250"
            className={css.imgSetup}
          />
        </div>
        <div className={css.cardInfo}>
          <div className={css.cardInfo2}>
            <h2 className={css.cardTitle}>
              {title}&nbsp;
              {formattedYear}
            </h2>
            {homepage && (
              <a
                className={css.cardLink}
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                title="Go to the official website"
              ></a>
            )}
          </div>
          {tagline && <i>{tagline}</i>}
          <div className={css.contOther}>
            {release_date && (
              <span className={css.formData}>{formattedDate} &#183; </span>
            )}
            {genresList && <span className={css.genrlist}> {genresList}</span>}
            {runtime > 0 && (
              <span className={css.filmDut}> &#183; {filmDuration}</span>
            )}
          </div>
          <ScoreBar score={score} />
          <div className={css.contOwerview}>
            <span className={css.overview}>Overview</span>
            <p className={css.iOwerview}>{movieOverview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
