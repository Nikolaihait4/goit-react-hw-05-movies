import { useState } from 'react';

export default function ShowMoreContent({ content }) {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleShowMore = () => setIsShowMore(p => !p);

  const slicedContent = `${content.slice(0, 300)}...`;

  return (
    <>
      <p>{isShowMore ? content : slicedContent}</p>
      <button type="button" onClick={handleShowMore}>
        {isShowMore ? 'Show less' : 'Show more'}
      </button>
    </>
  );
}
