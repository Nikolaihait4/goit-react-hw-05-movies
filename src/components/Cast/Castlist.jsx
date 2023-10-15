import { smoothScroll } from 'components/help/scroll';
import React, { useEffect } from 'react';
import placeholder from '../../img/image.webp';
import css from './CastList.module.css';

function CastList({ cast }) {
  useEffect(() => {
    smoothScroll('scrollToCastList');
  }, []);

  return (
    <div className={css.castListCont}>
      <ul name="scrollToCastList" className={css.castListItem}>
        {cast.map(({ id, name, character, profile_path }) => {
          const profilePath = profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : placeholder;

          return (
            <li key={id} className={css.castListList}>
              <img
                className={css.castListImg}
                src={profilePath}
                alt={name}
                width="200"
              />
              <div className={css.castListInfo}>
                <p className={css.castListName}>{name}</p>
                <p className={css.castListHar}>{character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CastList;
