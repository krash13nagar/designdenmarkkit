import { useEffect } from 'react';

const useCustomScrollbar = (
  ref: React.RefObject<HTMLElement>,
  initialPadding: string = '21px',
  scrollPadding: string = '5px'
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        ref.current.style.paddingRight = scrollPadding; // Show the scrollbar
      }
    };
    const handleScrollEnd = () => {
      if (ref?.current) {
        ref.current.style.paddingRight = initialPadding;
      }
    };

    if (ref?.current) {
      ref.current.addEventListener('scroll', handleScroll);
      ref.current.addEventListener('scrollend', handleScrollEnd);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
        ref.current.removeEventListener('scrollend', handleScrollEnd);
      }
    };
  }, [ref]);
};

export default useCustomScrollbar;
