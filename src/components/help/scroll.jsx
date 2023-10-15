import * as Scroll from 'react-scroll';

export function smoothScroll(element) {
  const scroll = Scroll.scroller;
  scroll.scrollTo(element, {
    duration: 1000,
    smooth: true,
  });
}
