import { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa'; // Импорт иконки стрелки вверх
import css from './ScrollTop.module.css';

const scroll = Scroll.animateScroll;

export function ScrollTop() {
  const [isBtnShow, setIsBtnShow] = useState(false);
  const scrollToTop = () => scroll.scrollToTop();

  useEffect(() => {
    const onScrollBtnShow = () =>
      window.scrollY > 100 ? setIsBtnShow(true) : setIsBtnShow(false);

    window.addEventListener('scroll', onScrollBtnShow);

    return () => {
      window.removeEventListener('scroll', onScrollBtnShow);
    };
  }, []);

  return (
    isBtnShow && (
      <div className={css.toTop}>
        <button className={css.butToTop} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    )
  );
}
