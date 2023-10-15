import { smoothScroll } from 'components/help/scroll';
import { useEffect } from 'react';
import placeholder from '../../img/image.webp';
import { convertDate } from 'components/help/convertDate';
import ShowMoreContent from 'components/Showmore/Scowmore';
import css from './ReviewsList.module.css';

function ReviewsList({ reviews }) {
  useEffect(() => {
    smoothScroll('scrollToReviewList');
  }, []);

  return (
    <div className={css.reviewsContainer}>
      <ul name="scrollToReviewList" className={css.reviewsItem}>
        {reviews.map(
          ({
            id,
            author = 'Unknown author',
            content,
            author_details,
            created_at,
          }) => {
            const isContentShort = content?.length < 300;

            const rating =
              Number(author_details?.rating) < 10
                ? `${author_details.rating}.0`
                : author_details.rating;

            const avatarPath = author_details.avatar_path
              ? `https://image.tmdb.org/t/p/original/${author_details.avatar_path}`
              : placeholder;

            const formattedDate = convertDate(created_at);
            return (
              <li key={id} className={css.reviewsList}>
                <div className={css.reviewsImgoCont}>
                  <img
                    src={avatarPath}
                    alt={author_details.name}
                    className={css.reviewsImg}
                  />
                  <div className={css.reviewsInfCont}>
                    <p className={css.reviewsAut}>
                      <span className={css.reviewsPost}>A review by: </span>
                      {author}
                    </p>
                    {author_details.rating && (
                      <span className={css.reviewsRating}>
                        {/* <AiFillStar /> */}
                        {rating}
                      </span>
                    )}
                    {created_at && (
                      <span className={css.reviewsWhen}>
                        <span className={css.reviewsWhen2}>Written on: </span>
                        {formattedDate}
                      </span>
                    )}
                  </div>
                </div>
                {isContentShort ? (
                  <p className={css.content}>{content}</p>
                ) : (
                  <ShowMoreContent content={content} />
                )}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default ReviewsList;
